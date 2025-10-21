import React from 'react';

const Tips = () => {
  const tips = [
    {
      id: 1,
      match: "Manchester United vs Liverpool",
      date: "2024-01-15",
      tip: "Over 2.5 Goals",
      odds: "1.85",
      confidence: "High",
      reasoning: "Both teams have strong attacking records this season"
    },
    {
      id: 2,
      match: "Barcelona vs Real Madrid",
      date: "2024-01-20",
      tip: "Barcelona Win",
      odds: "2.10",
      confidence: "Medium",
      reasoning: "Home advantage and recent form favor Barcelona"
    },
    {
      id: 3,
      match: "Chelsea vs Arsenal",
      date: "2024-01-25",
      tip: "Both Teams to Score",
      odds: "1.75",
      confidence: "High",
      reasoning: "Both teams have scored in their last 5 meetings"
    }
  ];

  const getConfidenceColor = (confidence) => {
    switch (confidence) {
      case 'High':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="min-h-screen bg-yellow-200 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-yellow-700 text-4xl font-extrabold mb-4">
            Expert Tips
          </h2>
          <p className="text-gray-700 text-lg">
            Our latest football predictions and betting insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div key={tip.id} className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-3xl transition duration-300">
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
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getConfidenceColor(tip.confidence)}`}>
                    {tip.confidence}
                  </span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 italic">
                  "{tip.reasoning}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
