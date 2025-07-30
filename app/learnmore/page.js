import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-6xl py-10 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
  FanFund is a platform that connects creators with their fans,<br />
  allowing for seamless funding of creative creations.
</h1>


<p className="mt-6 text-xl md:text-2xl text-center text-gray-700 dark:text-gray-300">
  You can <span className="font-semibold text-purple-600 dark:text-purple-400">fund our owner Sambhav Saxena</span> to help him create more awesome stuff!
</p>

<h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mt-4 ">
  Explore More Projects by Sambhav 🚀
</h2>

<div className="grid mb-4 grid-cols-1 md:grid-cols-3 gap-6 px-4 ">
  <a href="https://github.com/Sambhav1401/Spotube-Music-Website" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-2xl shadow-lg hover:shadow-2xl bg-white dark:bg-gray-800 transition duration-300">
    <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">🎧 Spotube Music Website</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-300">A beautiful web-based Music Player built with a modern UI and audio streaming features.</p>
  </a>

  <a href="https://github.com/Sambhav1401/PassVault-Manager" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-2xl shadow-lg hover:shadow-2xl bg-white dark:bg-gray-800 transition duration-300">
    <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">🔐 PassVault Manager</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-300">A secure password manager with encryption, clipboard copying, and both local + MongoDB storage.</p>
  </a>

  <a href="https://github.com/Sambhav1401/Todo-using-React" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-2xl shadow-lg hover:shadow-2xl  bg-white dark:bg-gray-800 transition duration-300">
    <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">📝 Todo App in React</h3>
    <p className="mt-2 text-gray-600 dark:text-gray-300">A sleek and efficient todo list app built with React. Simple, clean, and productive.</p>
  </a>
</div>


    </div>
  )
}

export default page
