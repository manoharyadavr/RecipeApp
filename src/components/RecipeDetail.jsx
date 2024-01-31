import React from "react";
import "./RecipeDetail.css";

// RecipeDetail component as a functional component
const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <div className="recipe-detail">
        {/* Display the title and description of the recipe */}
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        {/* More details can be added here */}
      </div>
    </div>
  );
};

export default RecipeDetail;
