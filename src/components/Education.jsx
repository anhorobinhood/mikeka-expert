import React, { useState } from 'react'
import { BookOpen, Target, Shield, TrendingUp, Users, AlertTriangle, CheckCircle, Play, Download } from 'lucide-react'

const Education = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Zote', count: 12 },
    { id: 'basics', name: 'Misingi', count: 4 },
    { id: 'strategies', name: 'Mikakati', count: 3 },
    { id: 'analysis', name: 'Uchambuzi', count: 3 },
    { id: 'safety', name: 'Usalama', count: 2 }
  ]

  const educationalContent = [
    {
      id: 1,
      title: "Misingi ya Utabiri wa Mpira wa Miguu",
      description: "Jifunze misingi ya utabiri wa mpira wa miguu na jinsi ya kufanya maamuzi sahihi.",
      category: "basics",
      type: "article",
      duration: "15 min",
      difficulty: "Mwanzo",
      image: "/api/placeholder/300/200",
      content: "Utabiri wa mpira wa miguu ni sanaa na sayansi. Unahitaji kuelewa mambo muhimu kama vile fomu ya timu, historia ya mechi, na hali ya wachezaji..."
    },
    {
      id: 2,
      title: "Mikakati ya Kufuata ili Kutengeneza Faida",
      description: "Jifunze mikakati ya kufanya faida katika utabiri wa mpira wa miguu.",
      category: "strategies",
      type: "video",
      duration: "25 min",
      difficulty: "Kati",
      image: "/api/placeholder/300/200",
      content: "Kufanya faida katika utabiri wa mpira wa miguu kunahitaji mikakati sahihi. Unahitaji kujifunza jinsi ya kuchagua mechi, kusimamia pesa, na kuepuka hasara..."
    },
    {
      id: 3,
      title: "Uchambuzi wa Timu na Wachezaji",
      description: "Jifunze jinsi ya kuchambua timu na wachezaji kwa usahihi.",
      category: "analysis",
      type: "article",
      duration: "20 min",
      difficulty: "Kati",
      image: "/api/placeholder/300/200",
      content: "Uchambuzi wa timu na wachezaji ni muhimu sana katika utabiri wa mpira wa miguu. Unahitaji kujifunza jinsi ya kuchambua fomu ya timu, historia ya mechi, na hali ya wachezaji..."
    },
    {
      id: 4,
      title: "Usalama na Udhibiti wa Hatari",
      description: "Jifunze jinsi ya kudhibiti hatari na kujilinda katika utabiri wa mpira wa miguu.",
      category: "safety",
      type: "video",
      duration: "18 min",
      difficulty: "Mwanzo",
      image: "/api/placeholder/300/200",
      content: "Usalama na udhibiti wa hatari ni muhimu sana katika utabiri wa mpira wa miguu. Unahitaji kujifunza jinsi ya kudhibiti pesa zako, kuepuka hatari, na kujilinda..."
    },
    {
      id: 5,
      title: "Jinsi ya Kuchagua Mechi",
      description: "Jifunze jinsi ya kuchagua mechi sahihi za utabiri.",
      category: "strategies",
      type: "article",
      duration: "12 min",
      difficulty: "Mwanzo",
      image: "/api/placeholder/300/200",
      content: "Kuchagua mechi sahihi ni muhimu sana katika utabiri wa mpira wa miguu. Unahitaji kujifunza jinsi ya kuchagua mechi, kuchambua timu, na kufanya maamuzi sahihi..."
    },
    {
      id: 6,
      title: "Uchambuzi wa Takwimu",
      description: "Jifunze jinsi ya kuchambua takwimu za mpira wa miguu.",
      category: "analysis",
      type: "video",
      duration: "30 min",
      difficulty: "Kati",
      image: "/api/placeholder/300/200",
      content: "Uchambuzi wa takwimu ni muhimu sana katika utabiri wa mpira wa miguu. Unahitaji kujifunza jinsi ya kuchambua takwimu, kufanya maamuzi sahihi, na kupata faida..."
    }
  ]

  const tips = [
    {
      icon: Target,
      title: "Kuchagua Mechi",
      description: "Chagua mechi zenye uwezekano wa juu wa mafanikio",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Udhibiti wa Hatari",
      description: "Dhibiti pesa zako na epuka hatari kubwa",
      color: "text-green-400"
    },
    {
      icon: TrendingUp,
      title: "Kufanya Faida",
      description: "Jifunze mikakati ya kufanya faida ya kudumu",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "Kujifunza",
      description: "Endelea kujifunza na kuboresha ujuzi wako",
      color: "text-purple-400"
    }
  ]

  const filteredContent = selectedCategory === 'all' 
    ? educationalContent 
    : educationalContent.filter(content => content.category === selectedCategory)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Mwanzo': return 'bg-green-600'
      case 'Kati': return 'bg-yellow-600'
      case 'Ju': return 'bg-red-600'
      default: return 'bg-navy-600'
    }
  }

  return (
    <div id="elimu" className="min-h-screen bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="w-8 h-8 text-primary-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              <span className="text-gradient">Elimu</span> ya Utabiri
            </h1>
          </div>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Jifunze misingi ya utabiri wa mpira wa miguu, mikakati ya kufanya faida, 
            na jinsi ya kudhibiti hatari. Elimu ni msingi wa mafanikio.
          </p>
        </div>

        {/* Quick Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tips.map((tip, index) => {
            const Icon = tip.icon
            return (
              <div key={index} className="card group hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-navy-700 group-hover:bg-navy-600 transition-colors duration-200">
                    <Icon className={`w-6 h-6 ${tip.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-navy-300 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-navy-800 text-navy-300 hover:bg-navy-700 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Educational Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((content) => (
            <div key={content.id} className="card group hover:scale-105 transition-all duration-300">
              {/* Content Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {content.type === 'video' ? (
                    <Play className="w-5 h-5 text-primary-400" />
                  ) : (
                    <BookOpen className="w-5 h-5 text-primary-400" />
                  )}
                  <span className="text-sm text-navy-300">{content.type === 'video' ? 'Video' : 'Makala'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(content.difficulty)} text-white`}>
                    {content.difficulty}
                  </span>
                  <span className="text-sm text-navy-300">{content.duration}</span>
                </div>
              </div>

              {/* Content Image */}
              <div className="bg-navy-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="text-center">
                  {content.type === 'video' ? (
                    <Play className="w-12 h-12 text-primary-400 mx-auto mb-2" />
                  ) : (
                    <BookOpen className="w-12 h-12 text-primary-400 mx-auto mb-2" />
                  )}
                  <div className="text-navy-300 text-sm">Picha ya {content.type}</div>
                </div>
              </div>

              {/* Content Info */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {content.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed line-clamp-3">
                  {content.description}
                </p>
              </div>

              {/* Content Preview */}
              <div className="bg-navy-700 rounded-lg p-4 mb-4">
                <p className="text-navy-300 text-sm leading-relaxed line-clamp-3">
                  {content.content}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 btn-primary text-sm">
                  {content.type === 'video' ? 'Ona Video' : 'Soma Makala'}
                </button>
                <button className="p-2 bg-navy-700 hover:bg-navy-600 rounded-lg transition-colors duration-200">
                  <Download className="w-4 h-4 text-navy-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Warning */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl p-6 mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-white" />
            <h3 className="text-xl font-bold text-white">Ongea na Usalama</h3>
          </div>
          <div className="text-white leading-relaxed">
            <p className="mb-4">
              Utabiri wa mpira wa miguu ni mchezo wa bahati na unaweza kupoteza pesa. 
              Jifunze jinsi ya kudhibiti hatari na kujilinda.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Usitumie pesa zaidi ya unazoweza kupoteza</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Dhibiti pesa zako na epuka hatari kubwa</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Jifunze misingi kabla ya kuanza</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white" />
                <span>Omba msaada ikiwa unahitaji</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Jifunze zaidi na Mikeka Expert
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Jiunge na vifurushi vyetu vya premium na upate elimu ya kina, uchambuzi wa kitaalamu, 
            na msaada wa kibinafsi katika utabiri wa mpira wa miguu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Jiunge Premium - TZS 5,000
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Ona Vifurushi
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
