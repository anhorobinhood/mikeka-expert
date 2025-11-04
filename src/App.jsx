import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Tips from './components/Tips'
import VIP from './components/VIP'
import Predictions from './components/Predictions'
import Packages from './components/Packages'
import Education from './components/Education'
import Articles from './components/Articles'
import Admin from './components/Admin'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-900">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <Tips />
              <Articles />
              <Education />
              <VIP />
            </>
          } />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/education" element={<Education />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1e293b',
              color: '#fff',
              border: '1px solid #3b82f6',
            },
          }}
        />
      </div>
    </Router>
  )
}

export default App
