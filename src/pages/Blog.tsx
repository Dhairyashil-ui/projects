import React from 'react';
import { Calendar, User, Tag, ChevronRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Agriculture",
      excerpt: "Discover how artificial intelligence is revolutionizing farming practices and improving crop yields.",
      date: "March 15, 2024",
      author: "John Smith",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1625244695851-1fc7d97e796d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Sustainable Farming Practices",
      excerpt: "Learn about the latest sustainable farming methods that are helping protect our environment.",
      date: "March 12, 2024",
      author: "Sarah Johnson",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Maximizing Crop Yields with Data",
      excerpt: "How modern farmers are using data analytics to optimize their crop production.",
      date: "March 10, 2024",
      author: "Mike Wilson",
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const categories = [
    "Technology",
    "Sustainability",
    "Data Analytics",
    "Market Trends",
    "Best Practices",
    "Industry News"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Agrimater Blog
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and success stories in smart farming.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Tag className="h-4 w-4 mr-2" />
                          {post.category}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <button className="text-green-600 font-semibold flex items-center hover:text-green-700">
                        Read More <ChevronRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-600 hover:text-green-600 flex items-center">
                        <ChevronRight className="h-4 w-4 mr-2" />
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter for the latest updates and insights.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;