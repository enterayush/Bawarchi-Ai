import React from "react";
import IngredientList from "./IngredientList.jsx";
import Recipe from "./Recipe.jsx";
import { getRecipeFromGemini } from "../src/ai.js";

export default function MainBody() {
    const [ingredients,setIngredients] = React.useState([]);

    const [recipe,setRecipe] = React.useState("");

    async function getRecipe() {
        const recipeMarkdown= await getRecipeFromGemini(ingredients);
        setRecipe(recipeMarkdown);
    }

    


    function addIngredients(formData) {
        const NewIngredient = formData.get("ingredient");
        console.log(NewIngredient);
        setIngredients(prevIngredients => [...prevIngredients, NewIngredient]);
        
    }

    return (
        <main>
            <div className="card">
            <form action={addIngredients}  >
                <input
                    className="ingredient-input"
                    type="text" placeholder="e.g oregano"
                    name="ingredient"
                />
                <input className="submit-button" type="submit" value="+ Add Ingredients" />
            </form>

            {ingredients.length > 0 ?<IngredientList ingredients={ingredients} getRecipe={getRecipe}/>:
                <p className="no-ingredients-message">Please, add at least four ingredients to generate a recipe.</p>
            }
            </div>

            {recipe && <Recipe recipe={recipe}/>}

        </main>
    );
}