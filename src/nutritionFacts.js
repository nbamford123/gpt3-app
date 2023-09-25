import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const NutritionFacts = (props) => {
  const { data } = props;
  if (typeof data !== "string") {
    return null;
  } else {
    const nutritionFacts = data.split(/\n\n|\n/);
    return (
      <Paper style={{ padding: "1rem" }}>
        <Typography variant="h6">
          Here are the nutrition facts for your recipe:
        </Typography>
        {nutritionFacts
          .filter((fact) => !fact.startsWith("Sure"))
          .map((fact, index) => (
            <Typography key={index} variant="body1">
              {fact}
            </Typography>
          ))}
      </Paper>
    );
  }
};

export default NutritionFacts;
