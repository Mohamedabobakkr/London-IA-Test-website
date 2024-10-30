import React from 'react';
import { Code, Database, Brain, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Students collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Launch Your Tech Career at London Innovation Academy
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Join our intensive bootcamps and master the skills needed for today's
            most in-demand tech careers.
          </p>
          <a
            href="/apply"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
          >
            Start Your Journey
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Bootcamps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Bootcamps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <Code className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Full Stack Development</li>
                <li>• Front End Development</li>
                <li>• Backend Development</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <Database className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Data Analysis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Data Visualization</li>
                <li>• Statistical Analysis</li>
                <li>• Business Intelligence</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <Brain className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4">ML & Data Science</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Machine Learning</li>
                <li>• Deep Learning</li>
                <li>• AI Applications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Applications are now open for our upcoming cohorts
          </p>
          <a
            href="https://form.typeform.com/to/xxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;