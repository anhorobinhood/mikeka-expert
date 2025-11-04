import React from 'react'
import { TrendingUp, Users, Trophy, Target, Clock, Star } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Usahihi wa Ubashiri',
      description: 'Kiwango cha juu cha usahihi katika ubashiri wetu',
      color: 'text-green-400'
    },
    {
      icon: Users,
      value: '10,000+',
      label: 'Watumiaji Waliojiunga',
      description: 'Watu wanaomini huduma zetu',
      color: 'text-primary-400'
    },
    {
      icon: Trophy,
      value: '500+',
      label: 'Bashiri zilizoleta Mafanikio',
      description: 'Bashiri zilizofanikiwa kwa mwaka huu',
      color: 'text-yellow-400'
    },
    {
      icon: Target,
      value: '24/7',
      label: 'Huduma ya Saa Zote',
      description: 'Tunakusaidia kila wakati unahitaji',
      color: 'text-blue-400'
    },
    {
      icon: Clock,
      value: '< 5min',
      label: 'Muda wa Kujibu',
      description: 'Tunakujibu haraka sana',
      color: 'text-purple-400'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Kiwango cha Huduma',
      description: 'Namna wateja wetu walivyoridhishwa na huduma hii',
      color: 'text-pink-400'
    }
  ]

  return (
    <section className="py-20 bg-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Kwa Nini <span className="text-gradient">Mikeka Expert</span>?
          </h2>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Tunatoa huduma bora ya bashiri za mpira wa miguu  
            Kwa kutumia teknolojia ya kisasa na ujuzi wa kitaalamu, tunakuhakikishia mafanikio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="card hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg bg-navy-700 group-hover:bg-navy-600 transition-colors duration-200`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div>
                    <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-white">
                      {stat.label}
                    </div>
                  </div>
                </div>
                <p className="text-navy-300 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Jiunge na Jamii ya Wapenda Mpira wa Miguu
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Pata fursa ya kujiunga na jamii ya wanaogeuza matokeo ya mpira wa miguu kuwa Pesa. 
            Tunakupa ushauri wa kitaalamu, uchambuzi wa kina, na fursa za kufanya faida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105">
              Jiunge Sasa - Bure
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Ona Vifurushi
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
