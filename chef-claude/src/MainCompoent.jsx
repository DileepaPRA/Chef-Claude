import React from 'react'

function MainCompoent() {
  return (
  <main className="w-[640px] border-x-2 border-b-2 border-gray-300 bg-stone-50 py-5 shadow-md">
    <form className="flex items-center justify-center gap-10 py-[30px]">
            <input 
                aria-label="add ingredient"
                placeholder="eg. oregano"
                type="text"
              className="rounded-md border border-gray-200 bg-white p-2 focus:border-gray-400 focus:outline-none"
            />
            <button className="bg-black text-white py-2 px-6 rounded-lg shadow-xl">+ Add ingredient</button>
        </form>
    </main>
  )
}

export default MainCompoent