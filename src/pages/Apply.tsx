import React from 'react';
import { ExternalLink } from 'lucide-react';

const Apply = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
            alt="Students working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-6">Apply Now</h1>
          <p className="text-xl max-w-2xl">
            Take the first step towards your new career in tech
          </p>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Submit Application</h3>
              <p className="text-gray-600">
                Fill out our online application form with your details and preferred program
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Initial Interview</h3>
              <p className="text-gray-600">
                Schedule a call with our admissions team to discuss your goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Technical Assessment</h3>
              <p className="text-gray-600">
                Complete a brief technical assessment to evaluate your current level
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2">Final Decision</h3>
              <p className="text-gray-600">
                Receive your admission decision and enrollment information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Begin?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Click below to fill out our application form and start your journey
            with London Innovation Academy
          </p>
          <a
            href="https://xr5obaakseu.typeform.com/to/G9nXs8ZC"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
          >
            Start Application
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Apply;