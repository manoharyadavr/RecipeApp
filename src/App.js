import React, { useState } from "react";
import "./App.css";
import AddRecipe from "./components/AddRecipe";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";

// Main App component as a functional component
function App() {
	// State for storing recipes
	const [recipes, setRecipes] = useState([]);
	// State for storing the selected recipe
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	// Function to add a new recipe to the list
	const addRecipe = (recipe) => {
		setRecipes([...recipes, recipe]);
	};

	// Function to set the currently selected recipe
	const selectRecipe = (recipe) => {
		setSelectedRecipe(recipe);
	};

	return (
		<div>
			<h1>Recipe Book</h1>
			{/* Component to add a new recipe */}
			<AddRecipe onAddRecipe={addRecipe} />
			{/* List of recipes with a function to handle recipe selection */}
			<RecipeList recipes={recipes} onSelectRecipe={selectRecipe} />
			{/* Conditionally render RecipeDetail if a recipe is selected */}
			{selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
		</div>
	);
}

export default App;
