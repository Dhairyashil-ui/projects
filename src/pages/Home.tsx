import React from 'react';
import { Link } from 'react-router-dom';
import { Plane as Plant, Satellite, CloudSun, BarChart as ChartBar } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Smart Farming with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Transform your farm with AI-powered insights and satellite technology. Make smarter decisions and improve productivity.
          </p>
          <div className="flex space-x-4">
            <Link to="/signup" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-semibold">
              Get Started
            </Link>
            <Link to="/how-it-works" className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-md text-lg font-semibold">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Agrimater?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Plant className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Monitoring</h3>
              <p className="text-gray-600">Real-time monitoring of crop health and growth patterns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Satellite className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Satellite Analysis</h3>
              <p className="text-gray-600">Advanced satellite imagery for precise field mapping.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CloudSun className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Weather Insights</h3>
              <p className="text-gray-600">Accurate weather forecasting for better planning.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ChartBar className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
              <p className="text-gray-600">Real-time market data for optimal selling decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-xl mb-8">Join thousands of farmers who are already using Agrimater to improve their productivity.</p>
          <Link to="/signup" className="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100">
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;