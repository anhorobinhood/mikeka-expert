import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-black to-purple-500 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#nyumbani" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
              <img src="/Assets/1logowhite.png" alt="Mikeka Expert Logo" className="h-20 w-auto" />
              <img src="/Assets/3logovec.png" alt="Mikeka Expert Logo" className="h-10 w-auto" />
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#nyumbani" className="hover:underline">Nyumbani</a>
            <a href="#tips" className="hover:underline">Tips za Leo</a>
            <a href="#vip" className="hover:underline">Premium</a>

            {/* Makala dropdown */}
            <div className="relative group">
              <button className="inline-flex items-center space-x-2 hover:underline focus:outline-none">
                <span>Makala</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transform translate-y-1 group-hover:translate-y-0 transition-all">
                <a href="#makala" className="block px-4 py-2 hover:bg-gray-100">Makala</a>
                <a href="#elimu" className="block px-4 py-2 hover:bg-gray-100">Elimu</a>
              </div>
            </div>

            <Link to="/admin" className="hover:underline">Admin</Link>
          </div>

          <div className="flex items-center space-x-3">
            <button className="bg-white text-blue-600 font-bold px-4 py-2 rounded-full hover:scale-105 transform transition">Ingia</button>
            <button className="bg-yellow-400 text-white font-bold px-4 py-2 rounded-full hover:scale-105 transform transition">Jiunge</button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-blue-600 to-purple-600">
              <a href="#nyumbani" className="block px-3 py-2 rounded-lg">Nyumbani</a>
              <a href="#tips" className="block px-3 py-2 rounded-lg">Tips za Leo</a>
              <a href="#vip" className="block px-3 py-2 rounded-lg">Premium</a>
              <a href="#makala" className="block px-3 py-2 rounded-lg">Makala</a>
              <a href="#elimu" className="block px-3 py-2 rounded-lg">Elimu</a>
              <Link to="/admin" className="block px-3 py-2 rounded-lg">Admin</Link>
              <div className="pt-4">
                <button className="w-full bg-yellow-400 text-white py-2 rounded-lg font-bold">Jiunge</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
