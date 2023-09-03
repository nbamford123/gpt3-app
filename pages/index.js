/*
Create a text area with the following specifications:
1. a H1 with the text "Find Nutriotion Facts for any recipe"
2. a text area for users to upload recipe
3. a button for users to submit the entered recipe
4. a section at the bottom to display nutrition facts
5. Get the data from this link: http://localhost:8080/openai/generateinfo
6. Name the component RecipeInfo
*/
import React from "react";
import axios from "axios";

const RecipeInfo = () => {
  const [recipe, setRecipe] = React.useState("");
  const [nutrition, setNutrition] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/openai/generateinfo", {
        recipe,
      });
      setNutrition(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Find Nutrition Facts for any recipe</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          placeholder="Enter a recipe"
        />
        <button className="button is-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="section">
        {isLoading ? (
          <progress className="progress is-small is-primary" max="100">
            15%
          </progress>
        ) : (
          <p className="content">{nutrition}</p>
        )}
        {error && <p className="has-text-danger">{error}</p>}
      </div>
    </div>
  );
};

export default RecipeInfo;
