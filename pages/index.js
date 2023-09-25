import { useState } from "react";
import axios from "axios";
import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";

import Header from "../src/header.js";
import Footer from "../src/footer.js";
import NutritionFacts from "../src/nutritionFacts.js";

const RecipeInfo = () => {
  const [recipe, setRecipe] = useState("");
  const [nutrition, setNutrition] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/openai/generateinfo",
        {
          recipe,
        }
      );
      setNutrition(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setRecipe("");
    setNutrition("");
  };

  /*
1 cup of all purpose flour, sifted, 1 1/2 teaspoon baking powder 1/4 teaspoon salt 2 Tablespoon granulated sugar 1/2 tablespoon unsalted butter, room temperature Approximately 1/3 cup water
*/

  return (
    <>
      <Header />
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        style={{ maxWidth: "50%", margin: "auto" }}
      >
        <Grid item>
          <h1 className="title">Find Nutrition Facts for any recipe</h1>
        </Grid>
        <Grid item style={{ width: "100%" }}>
          <Paper style={{ padding: "1rem" }}>
            <form onSubmit={handleSubmit}>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={2}
              >
                <Grid item style={{ width: "100%", height: "100%" }}>
                  <TextField
                    variant="outlined"
                    value={recipe}
                    onChange={(e) => setRecipe(e.target.value)}
                    placeholder="Enter a recipe"
                    multiline
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isLoading}
                    onClick={handleSubmit}
                  >
                    {isLoading ? <CircularProgress size={24} /> : "Submit"}
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginLeft: "1rem" }}
                    onClick={handleClear}
                  >
                    Clear
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item>
          <section>
            {isLoading ? <></> : <NutritionFacts data={nutrition} />}
            {error && <p className="has-text-danger">{error}</p>}
          </section>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};
export default RecipeInfo;
