import { useState } from 'react'

function MainCompoent() {

    const [ingredients, setIngredient] = useState([])

    const ingredientListItems = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    });

    const submitHandler = (formData) => {
        const newIngredient = formData.get("ingredient")
        setIngredient((peviousIngrdient) => [...peviousIngrdient, newIngredient]);
        
    }

  return (
  <main className="w-[640px] border-x-2 border-b-2 border-gray-300 bg-stone-50 py-5 shadow-md flex flex-col rounded-b-lg">
        <form className="flex items-center justify-center gap-10 pb-[6px] pt-[20px]" action={submitHandler}>
            <input 
                aria-label="add ingredient"
                placeholder="eg. oregano"
                type="text"
                name="ingredient"
                className="rounded-md border border-gray-200 bg-white p-2 focus:border-gray-400 focus:outline-none"
            />
            <button className="bg-black text-white py-2 px-6 rounded-lg shadow-xl">+ Add ingredient</button>
        </form>
        <p className="ml-25 mb-4 text-xs text-zinc-600 opacity-50">add at least four ingredients</p>
        {ingredients.length > 0 && <section className="ml-10">
            <h2 className="text-4xl font-bold mb-4">Ingredient on hand:</h2>
            <ul className="list-disc mb-4 gap-2 ml-10 mb-8" aria-live="poite">{ingredientListItems}</ul>
            {ingredients.length > 3 &&<div className="bg-taupe-200 w-[540px] rounded-md flex items-center p-4">
                <div className="ml-4">
                    <h3 className="font-medium mb-2">Ready for a recipe?</h3>
                    <p className="text-sm text-slate-500">Genarate a recipe from your list of ingredient</p>
                </div>
                <button className="bg-amber-600 text-white px-2 rounded-lg ml-18 w-28 h-12">Get a recipe</button>
            </div>}
        </section>}
    </main>
  )
}

export default MainCompoent