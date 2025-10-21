import React from 'react';

const VIP = () => {
  const vipTips = [
    {
      id: 1,
      match: "PSG vs Bayern Munich",
      date: "2024-02-01",
      tip: "PSG Win & Over 3.5 Goals",
      odds: "3.20",
      confidence: "High"
    },
    {
      id: 2,
      match: "Juventus vs Inter Milan",
      date: "2024-02-05",
      tip: "Correct Score 2-1",
      odds: "8.50",
      confidence: "Medium"
    },
    {
      id: 3,
      match: "Atletico Madrid vs Sevilla",
      date: "2024-02-10",
      tip: "Atletico Win to Nil",
      odds: "2.75",
      confidence: "High"
    }
  ];

  return (
    <section className="min-h-screen bg-yellow-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-yellow-700 text-4xl font-extrabold mb-4">
            VIP Premium Tips
          </h2>
          <p className="text-gray-700 text-lg">
            Exclusive high-value predictions for premium subscribers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vipTips.map((tip) => (
            <div key={tip.id} className="relative bg-white p-6 rounded-xl shadow-2xl">
              {/* Blur overlay for locked content */}
              <div className="absolute inset-0 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="mb-4">
                    <svg className="w-12 h-12 text-yellow-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Premium Content</h3>
                  <p className="text-sm text-gray-600 mb-4">Subscribe to unlock this tip</p>
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                    Subscribe Now
                  </button>
                </div>
              </div>
              
              {/* Blurred content underneath */}
              <div className="opacity-30">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{tip.match}</h3>
                  <p className="text-sm text-gray-600">{tip.date}</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Tip:</span>
                    <span className="font-bold text-lg text-yellow-700">{tip.tip}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">Odds:</span>
                    <span className="font-bold text-lg text-green-600">{tip.odds}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Confidence:</span>
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                      {tip.confidence}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* VIP Subscription CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white p-10 rounded-xl shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-yellow-700 text-3xl font-extrabold mb-4">
              Unlock Premium Predictions
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Get access to exclusive high-value tips, detailed analysis, and priority support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                Monthly Plan - $29.99
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
                Yearly Plan - $299.99
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VIP;
