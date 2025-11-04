import React, { useState } from 'react'
import { Crown, Star, Shield, Zap, Users, Trophy, CheckCircle, X } from 'lucide-react'

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState('premium')
  const [showComparison, setShowComparison] = useState(false)

  const packages = [
    {
      id: 'basic',
      name: 'Basic',
      price: 10000,
      currency: 'TZS',
      period: 'kwa Wiki',
      description: 'Kwa wanaoanza',
      features: [
        'Ubashiri wa Bure (3 kwa siku)',
        'Taarifa za Mechi',
        'Ubashiri wa Ligi 3',
        'Taarifa za Msingi'
      ],
      limitations: [
        'Hakuna Uchambuzi wa Kitaalamu',
        'Hakuna Taarifa za Haraka',
        'Ubashiri wa Kawaida tu'
      ],
      color: 'from-navy-600 to-navy-700',
      buttonColor: 'bg-navy-600 hover:bg-navy-700',
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 25000,
      currency: 'TZS',
      period: 'kwa mwezi',
      description: 'Bora zaidi kwa wengi',
      features: [
        'Ubashiri wa Premium (10 kwa siku)',
        'Uchambuzi wa Kitaalamu',
        'Taarifa za Haraka',
        'Msaada wa 24/7',
        'Jamii ya Premium',
        'Ubashiri wa Ligi 5+',
        'Uchambuzi wa Timu',
        'Taarifa za Mwisho wa Sasa'
      ],
      limitations: [],
      color: 'from-primary-600 to-primary-800',
      buttonColor: 'bg-white text-primary-600 hover:bg-primary-50',
      popular: true
    },
    {
      id: 'vip',
      name: 'VIP',
      price: 50000,
      currency: 'TZS',
      period: 'kwa mwezi',
      description: 'Kwa wanaotaka mafanikio makubwa',
      features: [
        'Ubashiri wa VIP (20 kwa siku)',
        'Uchambuzi wa Kibinafsi',
        'Msaada wa Kibinafsi',
        'Dhamana ya Faida',
        'Kupata Mapema',
        'Ubashiri wa Ligi Zote',
        'Uchambuzi wa Kina',
        'Taarifa za Siri',
        'Mkutano wa Kibinafsi',
        'Msaada wa Kifedha'
      ],
      limitations: [],
      color: 'from-yellow-600 to-yellow-800',
      buttonColor: 'bg-white text-yellow-600 hover:bg-yellow-50',
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "Ahmed Hassan",
      location: "Dar es Salaam",
      package: "Premium",
      profit: "+TZS 2,500,000",
      comment: "Premium package imenisaidia sana. Nimepata faida kubwa kwa miezi mitatu tu!",
      rating: 5
    },
    {
      name: "Peter Bundala",
      location: "Arusha",
      package: "VIP",
      profit: "+TZS 4,200,000",
      comment: "VIP package ni bora sana. Uchambuzi wao wa kibinafsi umenisaidia sana.",
      rating: 5
    },
    {
      name: "John Mwalimu",
      location: "Mwanza",
      package: "Premium",
      profit: "+TZS 1,800,000",
      comment: "Huduma bora sana. Wanaeleza kila kitu vizuri na utabiri wao ni sahihi.",
      rating: 5
    }
  ]

  const faqs = [
    {
      question: "Je, naweza kubadilisha kifurushi wakati wowote?",
      answer: "Ndiyo, unaweza kubadilisha kifurushi wakati wowote. Tunaweza kukusaidia kubadilisha kutoka Basic hadi Premium au VIP."
    },
    {
      question: "Je, kuna dhamana ya faida?",
      answer: "Ndiyo, tunatoa dhamana ya faida kwa vifurushi vya Premium na VIP. Ikiwa hukupata faida kwa mwezi, tunarudisha pesa zako."
    },
    {
      question: "Je, ubashiri wenu ni sahihi kiasi gani?",
      answer: "Tuna kiwango cha usahihi cha 95%+ katika bashiri zetu. Tunatumia teknolojia ya kisasa na ujuzi wa kitaalamu."
    },
    {
      question: "Je, naweza kusimamisha kifurushi wakati wowote?",
      answer: "Ndiyo, unaweza kusimamisha kifurushi wakati wowote bila ada ya ziada. Tunakuhakikishia msaada wa kifedha."
    }
  ]

  return (
    <div className="min-h-screen bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Vifurushi vya <span className="text-gradient">Premium</span>
            </h1>
          </div>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Chagua kifurushi kinachokufaa zaidi. Kila kifurushi kimeundwa kwa mahitaji tofauti 
            ya watumiaji wa mpira wa miguu Tanzania.
          </p>
        </div>

        {/* Package Comparison Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="bg-navy-800 border border-navy-700 rounded-lg p-2 flex items-center space-x-2 text-navy-300 hover:text-white transition-colors duration-200"
          >
            {showComparison ? <X className="w-4 h-4" /> : <Users className="w-4 h-4" />}
            <span>{showComparison ? 'Funga' : 'Ona'}</span>
          </button>
        </div>

        {/* Packages Grid */}
        <div className={`grid grid-cols-1 ${showComparison ? 'lg:grid-cols-3' : 'lg:grid-cols-1'} gap-8 mb-16`}>
          {packages.map((pkg) => (
            <div key={pkg.id} className={`card relative ${pkg.popular ? 'ring-2 ring-primary-500' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Bora Zaidi
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-navy-300 mb-4">{pkg.description}</p>
                <div className="text-4xl font-bold text-primary-400 mb-2">
                  {pkg.currency} {pkg.price.toLocaleString()}
                </div>
                <div className="text-navy-300">{pkg.period}</div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Vipengele:</h4>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-navy-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 ${pkg.buttonColor}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                Chagua {pkg.name}
              </button>
            </div>
          ))}
        </div>

        {/* Selected Package Details */}
        {!showComparison && (
          <div className="mb-16">
            <div className="bg-navy-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Maelezo ya Kifurushi cha {packages.find(p => p.id === selectedPackage)?.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Vipengele vya Kifurushi:</h4>
                  <ul className="space-y-3">
                    {packages.find(p => p.id === selectedPackage)?.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-navy-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Kwa Nini Kifurushi Hiki?</h4>
                  <p className="text-navy-300 leading-relaxed mb-4">
                    Kifurushi cha {packages.find(p => p.id === selectedPackage)?.name} kimeundwa kwa 
                    watumiaji ambao wanataka {packages.find(p => p.id === selectedPackage)?.description.toLowerCase()}.
                  </p>
                  <div className="bg-primary-600 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Bei: {packages.find(p => p.id === selectedPackage)?.currency} {packages.find(p => p.id === selectedPackage)?.price.toLocaleString()}</div>
                    <div className="text-primary-100 text-sm">{packages.find(p => p.id === selectedPackage)?.period}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Watu Wamepata Faida Gani?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-navy-300 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-navy-400">{testimonial.location}</div>
                    <div className="text-xs text-primary-400">{testimonial.package} Package</div>
                  </div>
                  <div className="text-green-400 font-bold">
                    {testimonial.profit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Maswali ya Mara nyingi (FAQ)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                <p className="text-navy-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Jiunge Leo na Upate Faida
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Usikose fursa ya kutengeneza faida kubwa katika mpira wa miguu. 
            Jiunge na vifurushi vyetu na uanze safari yako ya mafanikio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Jiunge Premium - TZS 5,000
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Ona Vifurushi Vyote
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
