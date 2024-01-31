import React, { Component } from "react";
import "./RecipeList.css";

// RecipeList component as a class component

class RecipeList extends Component {
  render() {
    return (
      <div className="recipe-list">
        <h2>Recipes List</h2>
        <ul>
          {/* Map through each recipe and display them as list items */}
          {this.props.recipes.map((recipe, index) => (
            <li key={index} onClick={() => this.props.onSelectRecipe(recipe)}>
              {recipe.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecipeList;
