import React from 'react';
import { Award, Users, Target, Sprout } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from technology to customer support."
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Farmer First",
      description: "Our farmers' success is our success. We prioritize their needs in everything we do."
    },
    {
      icon: <Target className="h-12 w-12 text-green-600" />,
      title: "Innovation",
      description: "We continuously innovate to provide the best solutions for modern farming challenges."
    },
    {
      icon: <Sprout className="h-12 w-12 text-green-600" />,
      title: "Sustainability",
      description: "We promote sustainable farming practices for a better future."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Agrimater
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're on a mission to revolutionize agriculture through AI and satellite technology.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2023, Agrimater emerged from a simple yet powerful idea: to make advanced farming technology accessible to every farmer.
                </p>
                <p>
                  Our team of agricultural experts, data scientists, and technology innovators came together with a shared vision of transforming traditional farming practices through AI and satellite technology.
                </p>
                <p>
                  Today, we're proud to serve thousands of farmers worldwide, helping them make data-driven decisions and improve their productivity while promoting sustainable farming practices.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Agrimater Team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Co-founder",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "David Kumar",
                role: "Head of Agriculture",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;