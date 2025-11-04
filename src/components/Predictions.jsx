import React, { useState } from 'react'
import { Clock, Target, TrendingUp, Filter, Calendar, Star, Eye, EyeOff } from 'lucide-react'

const Predictions = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedDate, setSelectedDate] = useState('today')

  const predictions = [
    {
      id: 1,
      match: "Manchester United vs Liverpool",
      league: "Premier League",
      time: "15:30",
      date: "2024-01-15",
      predictions: [
        { type: "Match Result", prediction: "Manchester United Win", odds: 2.10, confidence: 85 },
        { type: "Over/Under", prediction: "Over 2.5 Goals", odds: 1.85, confidence: 90 },
        { type: "Both Teams Score", prediction: "Yes", odds: 1.75, confidence: 80 }
      ],
      status: "upcoming",
      isPremium: false,
      category: "premier"
    },
    {
      id: 2,
      match: "Barcelona vs Real Madrid",
      league: "La Liga",
      time: "18:00",
      date: "2024-01-15",
      predictions: [
        { type: "Match Result", prediction: "Draw", odds: 3.20, confidence: 75 },
        { type: "Over/Under", prediction: "Over 3.5 Goals", odds: 2.50, confidence: 85 },
        { type: "Both Teams Score", prediction: "Yes", odds: 1.60, confidence: 95 }
      ],
      status: "upcoming",
      isPremium: true,
      category: "laliga"
    },
    {
      id: 3,
      match: "Bayern Munich vs Dortmund",
      league: "Bundesliga",
      time: "20:30",
      date: "2024-01-15",
      predictions: [
        { type: "Match Result", prediction: "Bayern Munich Win", odds: 1.70, confidence: 90 },
        { type: "Over/Under", prediction: "Over 2.5 Goals", odds: 1.45, confidence: 95 },
        { type: "Both Teams Score", prediction: "Yes", odds: 1.40, confidence: 85 }
      ],
      status: "live",
      isPremium: false,
      category: "bundesliga"
    }
  ]

  const filters = [
    { id: 'all', name: 'Zote', count: predictions.length },
    { id: 'premier', name: 'Premier League', count: predictions.filter(p => p.category === 'premier').length },
    { id: 'laliga', name: 'La Liga', count: predictions.filter(p => p.category === 'laliga').length },
    { id: 'bundesliga', name: 'Bundesliga', count: predictions.filter(p => p.category === 'bundesliga').length },
    { id: 'premium', name: 'Premium', count: predictions.filter(p => p.isPremium).length }
  ]

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

  const filteredPredictions = selectedFilter === 'all' 
    ? predictions 
    : predictions.filter(p => p.category === selectedFilter || (selectedFilter === 'premium' && p.isPremium))

  return (
    <div className="min-h-screen bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Utabiri wa <span className="text-gradient">Mpira wa Miguu</span>
          </h1>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Pata utabiri sahihi wa mpira wa miguu kutoka kwa wataalamu wetu. 
            Tuna utabiri wa bure na wa premium kwa kila siku.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-navy-800 rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* League Filters */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Chagua Ligi
              </h3>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                      selectedFilter === filter.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-navy-700 text-navy-300 hover:bg-navy-600 hover:text-white'
                    }`}
                  >
                    {filter.name} ({filter.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Date Filter */}
            <div className="lg:w-64">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Tarehe
              </h3>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-navy-700 border border-navy-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="today">Leo</option>
                <option value="tomorrow">Kesho</option>
                <option value="week">Wiki hii</option>
              </select>
            </div>
          </div>
        </div>

        {/* Predictions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPredictions.map((prediction) => (
            <div key={prediction.id} className="card group hover:scale-105 transition-all duration-300">
              {/* Match Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-400 rounded-full"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{prediction.match}</h3>
                    <p className="text-sm text-navy-300">{prediction.league}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock className="w-4 h-4 text-navy-400" />
                    <span className="text-sm text-navy-300">{prediction.time}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${getStatusColor(prediction.status)}`}>
                    {prediction.status === 'upcoming' ? 'Hajaanza' : 
                     prediction.status === 'live' ? 'Inaendelea' : 'Imeisha'}
                  </span>
                </div>
              </div>

              {/* Predictions List */}
              <div className="space-y-4 mb-6">
                {prediction.predictions.map((pred, index) => (
                  <div key={index} className="bg-navy-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-navy-300">{pred.type}</span>
                      <div className="flex items-center space-x-2">
                        {prediction.isPremium && (
                          <Star className="w-4 h-4 text-yellow-400" />
                        )}
                        <span className={`text-xs px-2 py-1 rounded ${getConfidenceColor(pred.confidence)} text-white`}>
                          {pred.confidence}%
                        </span>
                      </div>
                    </div>
                    <div className="text-white font-semibold mb-1">{pred.prediction}</div>
                    <div className="text-sm text-navy-300">Odds: {pred.odds}</div>
                    
                    {/* Confidence Bar */}
                    <div className="mt-2">
                      <div className="w-full bg-navy-600 rounded-full h-1.5">
                        <div 
                          className={`h-1.5 rounded-full transition-all duration-500 ${getConfidenceColor(pred.confidence)}`}
                          style={{ width: `${pred.confidence}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                prediction.isPremium 
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-navy-900 hover:from-yellow-400 hover:to-yellow-500'
                  : 'bg-primary-600 hover:bg-primary-700 text-white'
              }`}>
                {prediction.isPremium ? 'Ona Utabiri wa Premium' : 'Ona Maelezo'}
              </button>
            </div>
          ))}
        </div>

        {/* Load More / Premium CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">Pata Utabiri wa Premium</h3>
            </div>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Jiunge na vifurushi vyetu vya premium na upate utabiri wa kina, uchambuzi wa kitaalamu, 
              na mafanikio zaidi katika mpira wa miguu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
                Jiunge Premium - TZS 5,000/mwezi
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Ona Vifurushi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Predictions
