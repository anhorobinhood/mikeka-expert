import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-yellow-200 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white p-10 rounded-xl shadow-2xl">
          <h1 className="text-yellow-700 text-4xl font-extrabold mb-6">
            Mikeka Expert
          </h1>
          <p className="text-gray-700 text-xl mb-8 max-w-2xl mx-auto">
            Logic-driven football predictions and betting tips. Make informed decisions with our expert analysis and statistical insights.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105">
            Explore Tips
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
