
"use client"
import React from 'react';
import '../../app/glow.css';

const Footer = () => {
  return (
    <footer className="relative bg-black/40 border-t border-gray-800/60 py-12 glow-effect">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">About Us</h3>
            <p className="text-gray-400 text-sm">Empowering your journey in AI & Data Science with cutting-edge tools and knowledge.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">Documentation</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">GitHub</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">Twitter</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">Discord</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800/60 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} The Agentic AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );


}

export default Footer;

