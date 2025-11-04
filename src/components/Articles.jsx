import React, { useState } from 'react'
import { Search, Calendar, User, Eye, Heart, Share2, Filter, Clock, TrendingUp } from 'lucide-react'

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('latest')

  const categories = [
    { id: 'all', name: 'Zote', count: 24 },
    { id: 'analysis', name: 'Uchambuzi', count: 8 },
    { id: 'news', name: 'Habari', count: 6 },
    { id: 'tips', name: 'Vidokezo', count: 5 },
    { id: 'previews', name: 'Mapitio', count: 5 }
  ]

  const articles = [
    {
      id: 1,
      title: "Uchambuzi wa Mechi ya Manchester United vs Liverpool",
      excerpt: "Uchambuzi wa kina wa mechi ya Manchester United vs Liverpool, fomu ya timu, na utabiri wa matokeo.",
      category: "analysis",
      author: "Ahmed Hassan",
      date: "2024-01-15",
      readTime: "8 min",
      views: 1250,
      likes: 89,
      image: "/api/placeholder/400/250",
      tags: ["Premier League", "Manchester United", "Liverpool", "Uchambuzi"],
      featured: true
    },
    {
      id: 2,
      title: "Habari za Soka: Timu 10 za Bora Duniani",
      excerpt: "Orodha ya timu 10 za bora duniani kulingana na takwimu za mwaka 2024.",
      category: "news",
      author: "Grace Mwamba",
      date: "2024-01-14",
      readTime: "5 min",
      views: 2100,
      likes: 156,
      image: "/api/placeholder/400/250",
      tags: ["Habari", "Timu za Bora", "Dunia"],
      featured: false
    },
    {
      id: 3,
      title: "Vidokezo 10 vya Utabiri wa Mpira wa Miguu",
      excerpt: "Vidokezo muhimu vya utabiri wa mpira wa miguu kutoka kwa wataalamu.",
      category: "tips",
      author: "John Mwalimu",
      date: "2024-01-13",
      readTime: "12 min",
      views: 3200,
      likes: 234,
      image: "/api/placeholder/400/250",
      tags: ["Vidokezo", "Utabiri", "Mpira wa Miguu"],
      featured: true
    },
    {
      id: 4,
      title: "Mapitio ya Mechi za Jumamosi",
      excerpt: "Mapitio ya mechi za Jumamosi na utabiri wa matokeo ya mechi za wiki ijayo.",
      category: "previews",
      author: "Ahmed Hassan",
      date: "2024-01-12",
      readTime: "6 min",
      views: 1800,
      likes: 98,
      image: "/api/placeholder/400/250",
      tags: ["Mapitio", "Jumamosi", "Mechi"],
      featured: false
    },
    {
      id: 5,
      title: "Uchambuzi wa Fomu ya Barcelona",
      excerpt: "Uchambuzi wa kina wa fomu ya Barcelona na utabiri wa mechi zaijazo.",
      category: "analysis",
      author: "Grace Mwamba",
      date: "2024-01-11",
      readTime: "10 min",
      views: 1500,
      likes: 112,
      image: "/api/placeholder/400/250",
      tags: ["Barcelona", "Fomu", "Uchambuzi"],
      featured: false
    },
    {
      id: 6,
      title: "Habari za Transfer za Januari",
      excerpt: "Habari za transfer za mwezi wa Januari na athari zake kwa timu.",
      category: "news",
      author: "John Mwalimu",
      date: "2024-01-10",
      readTime: "7 min",
      views: 2800,
      likes: 189,
      image: "/api/placeholder/400/250",
      tags: ["Transfer", "Januari", "Habari"],
      featured: true
    }
  ]

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.date) - new Date(a.date)
      case 'popular':
        return b.views - a.views
      case 'likes':
        return b.likes - a.likes
      default:
        return 0
    }
  })

  const featuredArticles = sortedArticles.filter(article => article.featured)
  const regularArticles = sortedArticles.filter(article => !article.featured)

  return (
    <div id="makala" className="min-h-screen bg-navy-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">Makala</span> ya Soka
          </h1>
          <p className="text-xl text-navy-300 max-w-3xl mx-auto">
            Pata makala za kina za soka, uchambuzi wa mechi, habari za soka, 
            na vidokezo vya utabiri wa mpira wa miguu.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-navy-800 rounded-xl p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-navy-400" />
                <input
                  type="text"
                  placeholder="Tafuta makala..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-navy-700 border border-navy-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-navy-700 border border-navy-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-navy-700 border border-navy-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="latest">Hivi karibuni</option>
                <option value="popular">Maarufu</option>
                <option value="likes">Penda zaidi</option>
              </select>
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-primary-400" />
              Makala za Maana
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article) => (
                <div key={article.id} className="card group hover:scale-105 transition-all duration-300">
                  {/* Article Image */}
                  <div className="bg-navy-700 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-navy-300 text-sm">Picha ya makala</div>
                    </div>
                  </div>

                  {/* Article Info */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs bg-primary-600 text-white px-2 py-1 rounded">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="text-xs text-navy-400">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-navy-300 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-navy-400">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('sw-TZ')}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-navy-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs bg-navy-700 text-navy-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="flex-1 btn-primary text-sm">
                      Soma Makala
                    </button>
                    <button className="p-2 bg-navy-700 hover:bg-navy-600 rounded-lg transition-colors duration-200">
                      <Share2 className="w-4 h-4 text-navy-300" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Makala Zote
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <div key={article.id} className="card group hover:scale-105 transition-all duration-300">
                {/* Article Image */}
                <div className="bg-navy-700 rounded-lg h-40 mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-navy-300 text-sm">Picha ya makala</div>
                  </div>
                </div>

                {/* Article Info */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs bg-primary-600 text-white px-2 py-1 rounded">
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                    <span className="text-xs text-navy-400">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-navy-300 text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                {/* Article Meta */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-sm text-navy-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString('sw-TZ')}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-navy-400">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{article.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{article.likes}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 btn-primary text-sm">
                    Soma
                  </button>
                  <button className="p-2 bg-navy-700 hover:bg-navy-600 rounded-lg transition-colors duration-200">
                    <Share2 className="w-4 h-4 text-navy-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="btn-secondary">
            Ona Makala Zaidi
          </button>
        </div>
      </div>
    </div>
  )
}

export default Articles
