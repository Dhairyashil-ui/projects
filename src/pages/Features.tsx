import React from 'react';
import { Plane as Plant, Satellite, CloudSun, BarChart as ChartBar, Smartphone, Brain, LineChart, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Plant className="h-12 w-12 text-green-600" />,
      title: "AI-Powered Smart Machine",
      description: "Get real-time insights about your farm's health, crop conditions, and optimal farming practices through our advanced AI algorithms."
    },
    {
      icon: <Satellite className="h-12 w-12 text-green-600" />,
      title: "Satellite Connectivity",
      description: "Access high-resolution satellite imagery for comprehensive field mapping, crop health monitoring, and soil analysis."
    },
    {
      icon: <LineChart className="h-12 w-12 text-green-600" />,
      title: "Market Updates",
      description: "Stay informed with real-time market prices and participate in live bidding for direct crop sales to maximize your profits."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-green-600" />,
      title: "24/7 Mobile Monitoring",
      description: "Monitor your farm anytime, anywhere through our mobile app. Get instant alerts and updates about your farm's conditions."
    },
    {
      icon: <Brain className="h-12 w-12 text-green-600" />,
      title: "AI Recommendations",
      description: "Receive personalized recommendations for crop management, pest control, and resource optimization based on AI analysis."
    },
    {
      icon: <CloudSun className="h-12 w-12 text-green-600" />,
      title: "Weather Intelligence",
      description: "Get accurate weather forecasts and agricultural weather insights to plan your farming activities effectively."
    },
    {
      icon: <ChartBar className="h-12 w-12 text-green-600" />,
      title: "Data Analytics",
      description: "Access comprehensive analytics and reports about your farm's performance, yield predictions, and resource utilization."
    },
    {
      icon: <Clock className="h-12 w-12 text-green-600" />,
      title: "Automated Scheduling",
      description: "Plan and automate your farming activities with smart scheduling based on weather, crop cycles, and market conditions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Features that Transform Farming
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Discover how Agrimater's cutting-edge technology revolutionizes farming practices and improves productivity.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seamless Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform integrates seamlessly with your existing farm equipment and management systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://media-hosting.imagekit.io/1c71a21ae2424bfb/Screenshot%202025-03-31%20235652.png?Expires=1838053684&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zFU2izaCkZVAO48KgHzclaok98Xn0k04ZaDLdpz7FEicCH7ZLcTU3nGIz4WIpyH9Jt0jLZ2uQQhOYq0oP6rUQ5gPWyv-xApXEdr6b4400h6ePCxz4F6K1EvQ~iYDJYS9bbXY7kSe65VhROunL2DBtEaPmYsJOzDzzCy1jD-DXj7DURWGzQ~WX3NzIFPai-VvkDemQtv85Q1NvExj4fgm36crRDS0gtweiwqafjitvJtnMUgo5qfwueegUyoixsyzQZCFDHz5khK7vEyRpd5V~bAnQdFC2mcKgvguX~UEpu2rumsnWcEkuRp3bt62OYvI1U-OkPfyP-UKPxKel12m3g__"
                alt="Smart Farming Technology"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Plant className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Smart Equipment Integration</h3>
                  <p className="text-gray-600">Connect your existing farm equipment to our platform for enhanced monitoring and control.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Mobile App Sync</h3>
                  <p className="text-gray-600">Access all features through our mobile app, available for both iOS and Android devices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <ChartBar className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Data Export</h3>
                  <p className="text-gray-600">Export your farm data in multiple formats for analysis and reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
