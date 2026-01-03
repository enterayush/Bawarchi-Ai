export default function ingredientsList(props) {

const ingredientsList = props.ingredients.map((ingredient) =>
        <li key= {ingredient}>{ingredient}</li>
    )

    return(
        
        <section >
                <h2>Ingredients on Hand</h2>
                <ul className="ingredients-list"> {ingredientsList}</ul>

                {props.ingredients.length > 3 &&<div className="get-recipe-button">
                    <div>
                        <h3>Ready to get started?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get Recipe</button>
                </div>}

            </section>
    )
}