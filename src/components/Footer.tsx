import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">LIA</h3>
            <p className="text-gray-400">
              Empowering the next generation of tech innovators through comprehensive bootcamps and hands-on learning.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/apply" className="text-gray-400 hover:text-white">Apply Now</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span className="text-gray-400">London, UK</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@lia.edu" className="text-gray-400 hover:text-white">info@lia.edu</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+442012345678" className="text-gray-400 hover:text-white">+44 20 1234 5678</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} London Innovation Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;