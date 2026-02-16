import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-lg font-bold">Brainwave.io</h1>
          <nav>
            <ul className="flex gap-6 m-0 p-0 list-none">
              <li><a className="font-semibold text-gray-700" href="#">Demos</a></li>
              <li><a className="font-semibold text-gray-700" href="#">Pages</a></li>
              <li><a className="font-semibold text-gray-700" href="#">Support</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <section className="rounded-lg overflow-hidden h-96 bg-cover bg-center" style={{backgroundImage: 'url(/icons/min3.jpg)'}}>
          <div className="h-full w-full bg-black/30 flex items-center">
            <div className="text-white max-w-md pl-10">
              <h2 className="text-4xl font-bold">Welcome to Brainwave</h2>
              <p className="mt-4">A minimal React + TypeScript + Tailwind starter.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
