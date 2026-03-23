import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe';
import IngredientList from './IngredientList';

function MainCompoent() {

    const [ingredients, setIngredient] = useState([]);
    const [recipe, setRecipe] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');


    const submitHandler = (formData) => {
        const newIngredient = formData.get("ingredient")
        setIngredient((peviousIngrdient) => [...peviousIngrdient, newIngredient]);
        
    }

    const generateRecipe = async () => {
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('/api/recipe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ingredients }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Could not generate recipe right now.');
            }

            setRecipe(data.recipe);
        } catch (requestError) {
            setError(requestError.message || 'Something went wrong while generating recipe.');
        } finally {
            setIsLoading(false);
        }
    };


return (
    <main className="w-[640px] border-x-2 border-b-2 border-gray-300 bg-stone-50 py-5 shadow-md flex flex-col rounded-b-lg">
        <form className="flex items-center justify-center gap-10 pb-[6px] pt-[20px]" action={submitHandler}>
            <input 
                aria-label="add ingredient"
                placeholder="e.g. oregano"
                type="text"
                name="ingredient"
                className="rounded-md border border-gray-200 bg-white p-2 focus:border-gray-400 focus:outline-none"
            />
            <button className="bg-black text-white py-2 px-6 rounded-lg shadow-xl">+ Add ingredient</button>
        </form>
        <p className="ml-25 mb-4 text-xs text-zinc-600 opacity-50">Add at least four ingredients</p>
        {ingredients.length > 0 && <IngredientList ingredients={ingredients} generateRecipe={generateRecipe} isLoading={isLoading} />}
        {error && <p className="ml-10 text-sm text-red-600">{error}</p>}
        {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
)
}

export default MainCompoent