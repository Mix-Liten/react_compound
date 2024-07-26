import { ReactNode, useState } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark', !isDarkMode)
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <h1 className="inline">Header</h1>
        <button
          onClick={toggleDarkMode}
          className="ml-auto dark:bg-blue-600 dark:hover:bg-blue-700 bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className=" flex flex-col flex-grow bg-gray-100 dark:bg-gray-800">{children}</main>
      <footer className="bg-blue-500 p-4 text-white text-center">Footer</footer>
    </div>
  )
}
