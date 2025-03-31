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
                src="https://media-hosting.imagekit.io/a5a22de129cd4285/DALL%C2%B7E%202025-03-18%2018.16.47%20-%20A%20high-quality,%20futuristic%20agriculture-themed%20background%20designed%20for%20a%20website%20banner.%20The%20image%20should%20depict%20a%20seamless%20digital%20farm-to-buyer%20marke.webp?Expires=1838054871&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gwlJpkO0F0Mg8YCtTs4dATZkJw12CNzLfsNpGHWjlvsLymN4P-sxoVImObKqpTAdmAH-scBBQ7sB0lw9tr~J~7V6QuCzPs5~OS69epn1UF9vgrN4lmUO3nCa9zj1tRyNCL-PyeQYISDeOQv9guvmKQagDqeK1QYDn8EgryGCHokcT856cgRYCZda1zNyZa4F1K6yBl8nrWRKRM2djXeoH6UGwIS-i6Jub11YHRoLKSxuKokpuLTKq3UIJsTfbouPRtoSa5-DhxyWRAjSf5~IuPuY4FKpupsaF0qQGG7NeHQlJeXsrmcIH6nVgYOKhG0SSfEZyy3Cvw1D3XWN76kB9Q__"
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
                name: "Dhairyashil Shinde",
                role: "Founder and Ceo",
                image: "https://media-hosting.imagekit.io/647cd9b114af4814/1704599380213.jpg?Expires=1838028398&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2LQzCWU0LsTvtt6rIcyume4dr3PvzEtFZS7PFU5zXNSAWwt~i1Dcmr7VrkqLO4ciSvN9jBxTcxfwrbnso7vcQC52xdy9YYixWsfTU0RyKOYEOgkV~soqeWi2uRy1YxIjkVAlHw1xs~Iq6iMdBYrAfEQoC~KKyMw6hJJWdCUo43rilmzvbf7ayHXeyodPksPtY2nLnYoh~eUpgJ67RCUa05S-WK0G2hCSOHpNMYJ-OL0I-os4KOLwLP9Od5PUd3sivF6nvOHInwQ2qoZcwu59l6GgSLNZ002~iKHznHjbhUKzhhgvagE0y1SxOFLpT-yS1DftU8TrpP6VRbVhaB~KVg__"
              },
              {
                name: "Aman Pokale",
                role: "Co-Founder",
                image: "https://media-hosting.imagekit.io/30a021029f5448bb/WhatsApp%20Image%202025-03-31%20at%2018.35.29_1f786b08.jpg?Expires=1838054497&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qhWODE4dbZYSxjfKjNeQwU95t~m4YRjQ4AalP7KzFmGCp6osAjiOw~-WeS7aE6TCQ~MMMdWMEzUShpi0BUFT9FTurwehQlBQDFsV5qokQJlPxT9CTHNS4wr8urri4mOekD66h9jwxmjk3EhPxt0t96rljl3X5I4GvD5S3iUVO8umRnvzNui0-hsU9JSolkPktmaZ9P6NP1VYgPPnAJD6qN-1tcC8kAayqL75RE0lWXne3gNohhpGA66eve5J94NZsk7Ogc7xnw2UpO8Q-Nhm8KJIRBgnm3ULmsJi8unmj9ubowGA~fs~Y25MBm~3csrs54tTbkypJfG0Th-TKErtlw__"
              },
              {
                name: "Parth Bend",
                role: "Head of Agriculture",
                image: "https://media-hosting.imagekit.io/986ab958aa2f42e0/WhatsApp%20Image%202025-03-31%20at%2020.46.32_4af669db.jpg?Expires=1838054497&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ftqogqJy3J1O0ekUBnF4QPqtSlcI2OuBCNbTMgWCKFLtC~pnxSfceKggEwsjQzS9TeOyDWIY-7ifQZGrA~R-xEkWoOfEY6383id2fgQ6MHBxxGBwc-NOSBTAGGjU3tex6gKaJpiiH4oy~0j-Fr52GKo-tLSPRtvxwBoXp14hpfmnXCTB2J9JQ1tdHX7H09eawjRMghL5OIRxEi~~~dDc36bhXmj4vC4r5~A-D-jUZrCs57H4n7hJ699odY-2YH4RBtRq8J0KeRizMcJhfVVpPpFQW~m2gn459y-yH~z1J2uvPKzEBMFktnvmRBaJqZFa1VP35T-SVFw9~ZSlbVTuGQ__"
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
