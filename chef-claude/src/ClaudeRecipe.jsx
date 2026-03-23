import React from 'react'

function ClaudeRecipe({ recipe }) {
  return (
    <section className="mt-6 ml-10 pr-10">
            <h2 className="text-2xl font-bold mb-4">Chef Claude recommends:</h2>
            <article className="bg-white rounded-lg p-4 shadow-sm" aria-live="polite">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-6">{recipe}</pre>
            </article>
        </section>
  )
}

export default ClaudeRecipe