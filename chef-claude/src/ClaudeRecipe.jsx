import React from 'react'

function ClaudeRecipe() {
  return (
    <section className="mt-6 ml-10 pr-10">
            <h2 className="text-2xl font-bold mb-4">Chef Claude recommends:</h2>
            <article className="bg-white rounded-lg p-4 shadow-sm" aria-live="polite">
                <p className="mb-4">Based on the ingredients you have, I would recommend making a simple, delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                <h3 className="text-xl font-bold mb-3">Beef Bolognese Pasta</h3>
                <strong className="block mb-2">Ingredients</strong>
                <ul className="list-disc ml-5 mb-4">
                    <li>Ground beef</li>
                    <li>Pasta</li>
                </ul>
                <strong className="block mb-2">Instructions</strong>
                <ol className="list-decimal ml-5">
                    <li>Brown the ground beef</li>
                    <li>Cook the pasta and combine</li>
                </ol>
            </article>
        </section>
  )
}

export default ClaudeRecipe