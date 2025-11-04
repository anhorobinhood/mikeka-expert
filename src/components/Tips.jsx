import React, { useState } from 'react'
import { Clock, TrendingUp, Target, Star, Eye, EyeOff } from 'lucide-react'

const Tips = () => {
  const [showAll, setShowAll] = useState(false)

  const freeTips = [
    {
      id: 1,
      match: "Manchester United vs Liverpool",
      prediction: "Over 2.5 Goals",
      confidence: 85,
      odds: 1.85,
      time: "15:30",
      status: "upcoming",
      category: "Goals"
    },
    {
      id: 2,
      match: "Barcelona vs Real Madrid",
      prediction: "Both Teams to Score",
      confidence: 90,
      odds: 1.75,
      time: "18:00",
      status: "upcoming",
      category: "BTTS"
    },
    {
      id: 3,
      match: "Arsenal vs Chelsea",
      prediction: "Arsenal Win",
      confidence: 80,
      odds: 2.10,
      time: "20:30",
      status: "upcoming",
      category: "Match Result"
    }
  ]

  const premiumTips = [
    {
      id: 4,
      match: "Bayern Munich vs Dortmund",
      prediction: "Bayern Munich -1.5",
      confidence: 95,
      odds: 2.50,
      time: "16:00",
      status: "upcoming",
      category: "Handicap",
      isPremium: true
    },
    {
      id: 5,
      match: "PSG vs Marseille",
      prediction: "PSG Win & Over 2.5",
      confidence: 88,
      odds: 3.20,
      time: "21:00",
      status: "upcoming",
      category: "Combo",
      isPremium: true
    }
  ]

  const allTips = [...freeTips, ...premiumTips]
  const displayedTips = showAll ? allTips : freeTips

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'bg-green-600'
    if (confidence >= 80) return 'bg-yellow-600'
    if (confidence >= 70) return 'bg-orange-600'
    return 'bg-red-600'
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'text-blue-400'
      case 'live': return 'text-green-400'
      case 'finished': return 'text-gray-400'
      default: return 'text-navy-300'
    }
  }

  return (
    <section id="tips" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Utabiri wa <span className="text-gradient">Leo</span>
          </h2>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Pata utabiri sahihi wa mpira wa miguu kutoka kwa wataalamu wetu. 
            Tuna utabiri wa bure na wa premium kwa kila siku.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-navy-800 rounded-lg p-1 flex">
            <button
              onClick={() => setShowAll(false)}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                !showAll 
                  ? 'bg-primary-600 text-white' 
                  : 'text-navy-300 hover:text-white'
              }`}
            >
              Bashiri za Bure 
            </button>
            <button
              onClick={() => setShowAll(true)}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                showAll 
                  ? 'bg-primary-600 text-white' 
                  : 'text-navy-300 hover:text-white'
              }`}
            >
              Bashiri zote
            </button>
          </div>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedTips.map((tip) => (
            <div key={tip.id} className="card group hover:scale-105 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-navy-400" />
                  <span className="text-sm text-navy-300">{tip.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {tip.isPremium && (
                    <Star className="w-4 h-4 text-yellow-400" />
                  )}
                  <span className={`text-xs px-2 py-1 rounded ${getConfidenceColor(tip.confidence)} text-white`}>
                    {tip.confidence}%
                  </span>
                </div>
              </div>

              {/* Match Info */}
              <div className="mb-4">
                <h3 className="text-white font-semibold mb-2 line-clamp-2">
                  {tip.match}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-navy-300">{tip.category}</span>
                  <span className={`text-sm font-medium ${getStatusColor(tip.status)}`}>
                    {tip.status === 'upcoming' ? 'Hajaanza' : tip.status}
                  </span>
                </div>
              </div>

              {/* Prediction */}
              <div className="bg-navy-700 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-primary-400" />
                  <span className="text-sm text-navy-300">Utabiri</span>
                </div>
                <div className="text-white font-semibold text-lg">
                  {tip.prediction}
                </div>
                <div className="text-sm text-navy-300 mt-1">
                  Odds: {tip.odds}
                </div>
              </div>

              {/* Confidence Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-navy-300">Kiwango cha Uaminifu</span>
                  <span className="text-sm font-medium text-white">{tip.confidence}%</span>
                </div>
                <div className="w-full bg-navy-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${getConfidenceColor(tip.confidence)}`}
                    style={{ width: `${tip.confidence}%` }}
                  ></div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full btn-primary text-sm">
                {tip.isPremium ? 'Ona Utabiri wa Premium' : 'Ona Maelezo'}
              </button>
            </div>
          ))}
        </div>

        {/* Load More / Premium CTA */}
        <div className="text-center">
          {!showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary flex items-center space-x-2 mx-auto"
            >
              <Eye className="w-4 h-4" />
              <span>Ona Utabiri Wote</span>
            </button>
          )}
          
          <div className="mt-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Pata Utabiri wa Premium</h3>
            </div>
            <p className="text-primary-100 mb-4">
              Jiunge na vifurushi vyetu vya premium na upate utabiri wa kina, uchambuzi wa kitaalamu, 
              na mafanikio zaidi katika mpira wa miguu.
            </p>
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Jiunge Premium - TZS 5,000/mwezi
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tips
