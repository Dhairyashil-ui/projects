import React from 'react';
import { Sprout, CloudRain, LineChart, Truck, Settings, Users } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Sprout className="h-12 w-12 text-green-600" />,
      title: "Soil Analysis",
      description: "Our AI analyzes soil composition and health using satellite data and ground sensors."
    },
    {
      icon: <CloudRain className="h-12 w-12 text-green-600" />,
      title: "Weather Monitoring",
      description: "Get real-time weather updates and predictions specific to your farm's location."
    },
    {
      icon: <Settings className="h-12 w-12 text-green-600" />,
      title: "Smart Planning",
      description: "Receive AI-powered recommendations for crop selection and farming practices."
    },
    {
      icon: <LineChart className="h-12 w-12 text-green-600" />,
      title: "Growth Tracking",
      description: "Monitor crop growth and health with satellite imagery and AI analysis."
    },
    {
      icon: <Truck className="h-12 w-12 text-green-600" />,
      title: "Harvest Planning",
      description: "Optimize harvest timing based on market conditions and crop readiness."
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Market Connection",
      description: "Connect directly with buyers through our platform for better prices."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1625244695851-1fc7d97e796d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Agrimater Works
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our advanced AI and satellite technology work together to transform your farming practices and improve productivity.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-white rounded-lg shadow-md p-8">
                <div className="absolute -top-4 left-8 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="mb-4 mt-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Satellite Imagery</h3>
                  <p className="text-gray-600">
                    High-resolution satellite images provide detailed insights about your farm's condition, crop health, and potential issues.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
                  <p className="text-gray-600">
                    Our AI algorithms process complex data to provide actionable insights and recommendations for optimal farming practices.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Mobile Integration</h3>
                  <p className="text-gray-600">
                    Access all features and receive real-time updates through our mobile app, available 24/7.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1625244695851-1fc7d97e796d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Agricultural Technology"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;