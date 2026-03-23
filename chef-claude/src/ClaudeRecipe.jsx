import React from 'react'
import ReactMarkdown from 'react-markdown'

function ClaudeRecipe({ recipe }) {
  return (
    <section className="mt-6 px-10">
            <h2 className="text-2xl font-bold mb-4">Chef Claude recommends:</h2>
            <article className="bg-white rounded-lg p-6 shadow-sm prose prose-stone max-w-none" aria-live="polite">
                <ReactMarkdown>{recipe}</ReactMarkdown>
            </article>
        </section>
  )
}

export default ClaudeRecipe