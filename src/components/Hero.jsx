import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Play, Trophy, Target, Clock, TrendingUp } from 'lucide-react'
import Countdown from 'react-countdown'

const Hero = () => {
  const [currentTip, setCurrentTip] = useState(0)
  
  const tips = [
    "Manchester United vs Liverpool - Over 2.5 Goals",
    "Barcelona vs Real Madrid - Both Teams to Score",
    "Arsenal vs Chelsea - Arsenal Win",
    "Bayern Munich vs Dortmund - Over 1.5 Goals"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [tips.length])

  const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span className="text-primary-400 font-bold">Limeanza!</span>
    } else {
      return (
        <div className="flex space-x-4 text-center">
          <div className="bg-navy-800 px-4 py-2 rounded-lg">
            <div className="text-2xl font-bold text-primary-400">{days}</div>
            <div className="text-xs text-navy-300">Siku</div>
          </div>
          <div className="bg-navy-800 px-4 py-2 rounded-lg">
            <div className="text-2xl font-bold text-primary-400">{hours}</div>
            <div className="text-xs text-navy-300">Masaa</div>
          </div>
          <div className="bg-navy-800 px-4 py-2 rounded-lg">
            <div className="text-2xl font-bold text-primary-400">{minutes}</div>
            <div className="text-xs text-navy-300">Dakika</div>
          </div>
          <div className="bg-navy-800 px-4 py-2 rounded-lg">
            <div className="text-2xl font-bold text-primary-400">{seconds}</div>
            <div className="text-xs text-navy-300">Sekunde</div>
          </div>
        </div>
      )
    }
  }

  // Calculate countdown target (next day at 6 PM)
  const getCountdownTarget = () => {
    const now = new Date()
    const tomorrow = new Date(now)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(18, 0, 0, 0) // 6 PM
    return tomorrow.getTime()
  }

  return (
    <section id="nyumbani" className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-white">Tips za</span>
                <br />
                <span className="text-gradient">Ubashiri wa Matokeo ya</span>
                <br />
                <span className="text-white">Mpira wa Miguu</span>
              </h1>
              <p className="text-xl text-navy-300 leading-relaxed max-w-1.5xl">
                Pata ushauri wa kitaalamu wa mpira wa miguu, uchambuzi wa kina, bashiri sahihi 
                kutoka kwa wataalamu wetu. Jiunge na jamii ya wanaogeuza Mpira wa miguu kuwa Pesa.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="bg-navy-800 border border-navy-700 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-primary-400" />
                <h3 className="text-lg font-semibold text-white">Utabiri wa Leo</h3>
              </div>
              <Countdown
                date={getCountdownTarget()}
                renderer={countdownRenderer}
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/predictions" className="btn-primary flex items-center justify-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Ona Utabiri wa Leo</span>
              </Link>
              <Link to="/packages" className="btn-secondary flex items-center justify-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>Jiunge Premium</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">95%</div>
                <div className="text-sm text-navy-300">Usahihi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">10K+</div>
                <div className="text-sm text-navy-300">Watumiaji</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">500+</div>
                <div className="text-sm text-navy-300">Utabiri</div>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Tips */}
          <div className="space-y-6">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Utabiri wa Leo</h3>
                <TrendingUp className="w-5 h-5 text-primary-400" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-navy-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-navy-300">Manchester United vs Liverpool</span>
                    <span className="text-xs bg-primary-600 text-white px-2 py-1 rounded">95%</span>
                  </div>
                  <div className="text-white font-semibold">Over 2.5 Goals</div>
                  <div className="text-sm text-navy-300">Odds: 1.85</div>
                </div>

                <div className="bg-navy-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-navy-300">Barcelona vs Real Madrid</span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">90%</span>
                  </div>
                  <div className="text-white font-semibold">Both Teams to Score</div>
                  <div className="text-sm text-navy-300">Odds: 1.75</div>
                </div>

                <div className="bg-navy-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-navy-300">Arsenal vs Chelsea</span>
                    <span className="text-xs bg-yellow-600 text-white px-2 py-1 rounded">85%</span>
                  </div>
                  <div className="text-white font-semibold">Arsenal Win</div>
                  <div className="text-sm text-navy-300">Odds: 2.10</div>
                </div>
              </div>

              <Link 
                to="/predictions" 
                className="btn-primary w-full mt-4 flex items-center justify-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>Ona Utabiri Wote</span>
              </Link>
            </div>

            {/* Rotating Tips */}
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">Kidokezo cha Saa</h3>
              <div className="bg-blue-700 rounded-lg p-4 min-h-[60px] flex items-center">
                <p className="text-white font-bold animate-fade-in">
                  {tips[currentTip]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
