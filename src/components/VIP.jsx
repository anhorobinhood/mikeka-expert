import React from 'react'
import { Crown, Star, Shield, Zap, Users, Trophy, CheckCircle } from 'lucide-react'

const VIP = () => {
  const features = [
    {
      icon: Crown,
      title: "Utabiri wa Premium",
      description: "Pata utabiri wa kina na usahihi wa juu zaidi",
      color: "text-yellow-400"
    },
    {
      icon: Star,
      title: "Uchambuzi wa Kitaalamu",
      description: "Uchambuzi wa kina wa mechi na timu",
      color: "text-primary-400"
    },
    {
      icon: Shield,
      title: "Dhamana ya Faida",
      description: "Tunakuhakikishia faida au pesa zako zinarudi",
      color: "text-green-400"
    },
    {
      icon: Zap,
      title: "Taarifa za Haraka",
      description: "Pata taarifa za mwisho wa sasa",
      color: "text-blue-400"
    },
    {
      icon: Users,
      title: "Jamii ya Premium",
      description: "Jiunge na jamii ya watumiaji wa premium",
      color: "text-purple-400"
    },
    {
      icon: Trophy,
      title: "Mafanikio ya Juu",
      description: "Kiwango cha mafanikio cha 95%+",
      color: "text-orange-400"
    }
  ]

  const testimonials = [
    {
      name: "Ahmed Hassan",
      location: "Dar es Salaam",
      rating: 5,
      comment: "Mikeka Expert imenisaidia sana. Nimepata faida kubwa kwa miezi mitatu tu!",
      profit: "+TZS 2,500,000"
    },
    {
      name: "Grace Mwamba",
      location: "Arusha",
      rating: 5,
      comment: "Utabiri wao ni sahihi sana. Nimejiunga na premium na sioni haja ya kuondoka.",
      profit: "+TZS 1,800,000"
    },
    {
      name: "John Mwalimu",
      location: "Mwanza",
      rating: 5,
      comment: "Huduma bora sana. Wanaeleza kila kitu vizuri na utabiri wao ni sahihi.",
      profit: "+TZS 3,200,000"
    }
  ]

  return (
    <section id="vip" className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Vifurushi vya <span className="text-gradient">Premium</span>
            </h2>
          </div>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Jiunge na vifurushi vyetu vya premium na upate fursa za kufanya faida kubwa 
            katika mpira wa miguu. Kila kifurushi kimeundwa kwa mahitaji yako.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="card group hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-navy-700 group-hover:bg-navy-600 transition-colors duration-200">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-navy-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Basic Package */}
          <div className="card">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
              <div className="text-4xl font-bold text-primary-400 mb-2">TZS 2,000</div>
              <div className="text-navy-300">kwa mwezi</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-navy-300">Utabiri wa Bure (3 kwa siku)</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-navy-300">Taarifa za Mechi</span>
              </li>
            </ul>
            <button className="btn-secondary w-full">
              Chagua Basic
            </button>
          </div>

          {/* Premium Package */}
          <div className="card-premium relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 text-navy-900 px-4 py-1 rounded-full text-sm font-bold">
                Bora Zaidi
              </div>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
              <div className="text-4xl font-bold text-yellow-400 mb-2">TZS 5,000</div>
              <div className="text-primary-100">kwa mwezi</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-primary-100">Utabiri wa Premium (10 kwa siku)</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-primary-100">Uchambuzi wa Kitaalamu</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-primary-100">Taarifa za Haraka</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-primary-100">Msaada wa 24/7</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-primary-100">Jamii ya Premium</span>
              </li>
            </ul>
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 w-full">
              Chagua Premium
            </button>
          </div>

          {/* VIP Package */}
          <div className="card">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">VIP</h3>
              <div className="text-4xl font-bold text-primary-400 mb-2">TZS 10,000</div>
              <div className="text-navy-300">kwa mwezi</div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-navy-300">Utabiri wa VIP (20 kwa siku)</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-navy-300">Uchambuzi wa Kibinafsi</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-navy-300">Msaada wa Kibinafsi</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-navy-300">Dhamana ya Faida</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-navy-300">Kupata Mapema</span>
              </li>
            </ul>
            <button className="btn-primary w-full">
              Chagua VIP
            </button>
          </div>
        </div>

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
                  </div>
                  <div className="text-green-400 font-bold">
                    {testimonial.profit}
                  </div>
                </div>
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
            Usikose fursa ya kufanya faida kubwa katika mpira wa miguu. 
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
    </section>
  )
}

export default VIP
