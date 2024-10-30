import React from 'react';
import { Users, Trophy, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">About LIA</h1>
          <p className="text-xl max-w-2xl">
            Transforming careers and shaping the future of tech education in London
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Users className="h-12 w-12 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide world-class tech education that empowers individuals to
                launch successful careers in technology.
              </p>
            </div>
            
            <div className="text-center">
              <Trophy className="h-12 w-12 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Excellence, innovation, and student success are at the core of
                everything we do.
              </p>
            </div>
            
            <div className="text-center">
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Goal</h3>
              <p className="text-gray-600">
                To bridge the tech skills gap and create the next generation of
                tech leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in the heart of London's tech hub, London Innovation
                Academy was born from a vision to transform tech education.
              </p>
              <p className="text-gray-600 mb-4">
                We've partnered with industry leaders to develop curriculum that
                meets real-world demands and prepares our students for successful
                careers in tech.
              </p>
              <p className="text-gray-600">
                Our graduates work at some of the world's leading tech companies,
                and we continue to evolve our programs to stay ahead of industry
                trends.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;