import React, { useState } from 'react'

const StatCard = ({ icon, title, value, color = 'text-blue-400' }) => (
  <div className="bg-navy-800 border border-navy-700 rounded-xl p-6 shadow hover:shadow-xl transition transform hover:-translate-y-1">
    <div className="flex items-start space-x-4">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-white/5 ${color}`}>{icon}</div>
      <div>
        <div className="text-sm text-navy-300">{title}</div>
        <div className="text-2xl font-bold text-white">{value}</div>
      </div>
    </div>
  </div>
)

const Admin = () => {
  const [activeTab, setActiveTab] = useState('takwimu')

  const stats = [
    { id: 'tips', title: 'Total Tips', value: '1,245', color: 'text-blue-400', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a2 2 0 012 2v6H4v-6a2 2 0 012-2h12z"/></svg> },
    { id: 'articles', title: 'Makala', value: '24', color: 'text-green-400', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8M8 12h8M8 8h8M4 6h.01M4 18h.01"/></svg> },
    { id: 'packages', title: 'Premium Packages', value: '3', color: 'text-blue-400', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3v2h6v-2c0-1.657-1.343-3-3-3z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 20h16v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2z"/></svg> },
    { id: 'testimonials', title: 'Ushuhuda', value: '128', color: 'text-green-400', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h6m-6 4h8"/></svg> }
  ]

  return (
    <div className="min-h-screen bg-navy-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Mikeka Expert Admin Dashboard</h1>
          <p className="text-navy-300 mt-2">Dhibiti maudhui ya wavuti na pata takwimu muhimu.</p>
        </header>

        {/* Tabs */}
        <div className="mb-6">
          <div className="bg-navy-800 rounded-lg p-1 inline-flex">
            <button
              className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'takwimu' ? 'bg-primary-600 text-white' : 'text-navy-300 hover:text-white'}`}
              onClick={() => setActiveTab('takwimu')}
            >
              Takwimu
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'content' ? 'bg-primary-600 text-white' : 'text-navy-300 hover:text-white'}`}
              onClick={() => setActiveTab('content')}
            >
              Maudhui
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'users' ? 'bg-primary-600 text-white' : 'text-navy-300 hover:text-white'}`}
              onClick={() => setActiveTab('users')}
            >
              Watumiaji
            </button>
          </div>
        </div>

        {/* Tab panels */}
        {activeTab === 'takwimu' && (
          <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((s) => (
                <StatCard key={s.id} title={s.title} value={s.value} icon={s.icon} color={s.color} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 card">
                <h3 className="text-lg font-semibold text-white mb-4">Takwimu za Hivi Karibuni</h3>
                <div className="bg-navy-700 rounded-lg h-56 flex items-center justify-center text-navy-300">Grafu placeholder</div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-white mb-4">Uchambuzi wa Haraka</h3>
                <ul className="space-y-3 text-navy-300">
                  <li>Utabiri zilizoona zaidi leo: <strong className="text-white">Manchester Utd vs Liverpool</strong></li>
                  <li>Mapato ya siku: <strong className="text-white">TZS 120,000</strong></li>
                  <li>Watumiaji wapya: <strong className="text-white">32</strong></li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'content' && (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1,2,3,4,5,6].map((n) => (
                <div key={n} className="card">
                  <div className="h-40 bg-navy-700 rounded-lg mb-4 flex items-center justify-center text-navy-300">Makala {n} image</div>
                  <h4 className="text-white font-semibold mb-2">Kichwa cha Makala {n}</h4>
                  <p className="text-navy-300 text-sm mb-4">Sehemu fupi ya muhtasari wa makala.</p>
                  <div className="flex space-x-2">
                    <button className="btn-primary flex-1">Hariri</button>
                    <button className="p-2 bg-red-700 rounded-lg">Futa</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'users' && (
          <section>
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">Watumiaji wa Karibu</h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-navy-300 border-b border-navy-700">
                    <th className="py-2">Jina</th>
                    <th className="py-2">Barua pepe</th>
                    <th className="py-2">Kifurushi</th>
                    <th className="py-2">Tarehe</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {name: 'Ahmed Hassan', email: 'ahmed@example.com', pkg: 'Premium', date: '2025-10-01'},
                    {name: 'Grace Mwamba', email: 'grace@example.com', pkg: 'VIP', date: '2025-09-28'},
                    {name: 'John Mwalimu', email: 'john@example.com', pkg: 'Basic', date: '2025-09-27'},
                  ].map((u, i) => (
                    <tr key={i} className="border-b border-navy-700">
                      <td className="py-3 text-white">{u.name}</td>
                      <td className="py-3 text-navy-300">{u.email}</td>
                      <td className="py-3"><span className="px-2 py-1 rounded bg-primary-600 text-white">{u.pkg}</span></td>
                      <td className="py-3 text-navy-300">{u.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Admin
