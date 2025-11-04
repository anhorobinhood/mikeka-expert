import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Trophy, 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  MessageCircle,
  Shield,
  Award,
  Users,
  Target
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Utabiri wa Bure', path: '/predictions' },
      { name: 'Utabiri wa Premium', path: '/predictions' },
      { name: 'Utabiri wa VIP', path: '/predictions' },
      { name: 'Uchambuzi wa Kitaalamu', path: '/education' }
    ],
    education: [
      { name: 'Misingi ya Utabiri', path: '/education' },
      { name: 'Mikakati ya Kufanya Faida', path: '/education' },
      { name: 'Usalama na Udhibiti wa Hatari', path: '/education' },
      { name: 'Vidokezo vya Kitaalamu', path: '/education' }
    ],
    company: [
      { name: 'Kuhusu Sisi', path: '/about' },
      { name: 'Wasiliana Nasi', path: '/contact' },
      { name: 'Sera ya Faragha', path: '/privacy' },
      { name: 'Masharti ya Matumizi', path: '/terms' }
    ],
    support: [
      { name: 'Msaada wa Kibinafsi', path: '/support' },
      { name: 'Maswali ya Mara nyingi', path: '/faq' },
      { name: 'Msaada wa Simu', path: '/phone' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/mikeka-expert', color: 'text-blue-400' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/mikeka-expert', color: 'text-blue-400' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/mikeka-expert', color: 'text-pink-400' }
  ]

  const contactInfo = [
    { icon: Phone, text: '+255 123 456 789', link: 'tel:+255123456789' },
    { icon: Mail, text: 'support@mikeka-expert.com', link: 'mailto:support@mikeka-expert.com' },
    { icon: MapPin, text: 'Dar es Salaam, Tanzania', link: '#' }
  ]

  const features = [
    { icon: Target, title: 'Utabiri Sahihi', description: '95%+ usahihi wa utabiri' },
    { icon: Users, title: 'Jamii ya Wapenda Soka', description: '10,000+ watumiaji' },
    { icon: Award, title: 'Ujuzi wa Kitaalamu', description: 'Wataalamu wa soka' },
    { icon: Shield, title: 'Usalama wa Pesa', description: 'Dhamana ya faida' }
  ]

  return (
  <footer id="amini" className="bg-navy-800 border-t border-navy-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">
                Mikeka Expert
              </span>
            </div>
            <p className="text-navy-300 leading-relaxed mb-6">
              Tovuti bora ya utabiri wa mpira wa miguu kwa watumiaji wa Tanzania. 
              Tunatoa ushauri wa kitaalamu, uchambuzi wa kina, na fursa za kufanya faida.
            </p>
            
            {/* Features */}
            <div className="space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-white">{feature.title}</div>
                      <div className="text-xs text-navy-400">{feature.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Huduma</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-navy-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Elimu</h3>
            <ul className="space-y-3">
              {footerLinks.education.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={index === 0 ? '#elimu' : '#elimu'}
                        className="text-navy-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kampuni</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-navy-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-4">Msaada</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-navy-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-navy-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Wasiliana Nasi</h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon
                  return (
                    <a
                      key={index}
                      href={contact.link}
                      className="flex items-center space-x-3 text-navy-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4 text-primary-400 flex-shrink-0" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Tufuate</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-navy-700 hover:bg-navy-600 rounded-lg transition-all duration-200 transform hover:scale-110 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Jiunge na Newsletter</h3>
              <p className="text-navy-300 text-sm mb-4">
                Pata taarifa za mwisho wa sasa na utabiri wa premium.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Barua pepe yako"
                  className="flex-1 bg-navy-700 border border-navy-600 rounded-l-lg px-4 py-2 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-200">
                  Jiunge
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-navy-900 border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-navy-300 text-sm">
              © {currentYear} Mikeka Expert. Haki zote zimehifadhiwa.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-navy-300 hover:text-primary-400 transition-colors duration-200">
                Sera ya Faragha
              </Link>
              <Link to="/terms" className="text-navy-300 hover:text-primary-400 transition-colors duration-200">
                Masharti ya Matumizi
              </Link>
              <Link to="/cookies" className="text-navy-300 hover:text-primary-400 transition-colors duration-200">
                Sera ya Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
