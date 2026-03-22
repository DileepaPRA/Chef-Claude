import React from 'react'

function IngredientList(props) {

  const ingredientListItems = props.ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    });
  
  return (
    <section className="ml-10">
            <h2 className="text-4xl font-bold mb-4">Ingredients on hand:</h2>
            <ul className="list-disc mb-8 ml-10" aria-live="polite">{ingredientListItems}</ul>
            {props.ingredients.length > 3 && <div className="bg-amber-100 w-[540px] rounded-md flex items-center p-4">
                <div className="ml-4">
                    <h3 className="font-medium mb-2">Ready for a recipe?</h3>
                    <p className="text-sm text-slate-600">Generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={props.toggleRecipeShown} className="bg-amber-600 text-white px-4 rounded-lg ml-auto w-28 h-12 hover:bg-amber-700">Get a recipe</button>
            </div>}
    </section>
  )
}

export default IngredientList