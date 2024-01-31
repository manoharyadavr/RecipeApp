import React, { useState } from "react";
import "./AddRecipe.css";

// AddRecipe component as a functional component
const AddRecipe = ({ onAddRecipe }) => {
  // Local state for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAddRecipe function passed as a prop
    onAddRecipe({ title, description });
    // Reset form fields
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-recipe">
      {/* Input field for recipe title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        required
      />
      {/* Textarea for recipe description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe description"
        required
      />
      {/* Submit button for the form */}
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipe;
