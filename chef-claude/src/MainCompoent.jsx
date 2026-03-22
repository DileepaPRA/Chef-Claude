import { useState } from 'react'

function MainCompoent() {

    const [ingredients, setIngredient] = useState([])

    const ingredientListItems = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    });

    const submitHandler = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredient((peviousIngrdient) => [...peviousIngrdient, newIngredient]);
        
    }

  return (
  <main className="w-[640px] border-x-2 border-b-2 border-gray-300 bg-stone-50 py-5 shadow-md flex flex-col">
        <form className="flex items-center justify-center gap-10 py-[30px]" onSubmit={submitHandler}>
            <input 
                aria-label="add ingredient"
                placeholder="eg. oregano"
                type="text"
                name="ingredient"
                className="rounded-md border border-gray-200 bg-white p-2 focus:border-gray-400 focus:outline-none"
            />
            <button className="bg-black text-white py-2 px-6 rounded-lg shadow-xl">+ Add ingredient</button>
        </form>
        <ul className="ml-30 list-disc">
            {ingredientListItems}
        </ul>
    </main>
  )
}

export default MainCompoent