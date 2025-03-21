import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
        <div className="flex items-center">
          {/* <img src="/path-to-logo.png" alt="Agentic AI" className="h-8" /> */}
          <span className="ml-2 text-xl font-bold">Agentic AI </span>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">What to expect</a>
          <a href="#" className="hover:text-gray-400">Curriculum</a>
          <a href="#" className="hover:text-gray-400">Instructors</a>
          <a href="#" className="hover:text-gray-400">Fees</a>
          <a href="#" className="hover:text-gray-400">Testimonials</a>
        </nav>
        <button className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">Enroll Now</button>
      </header>

      <main className="flex flex-col items-center text-center mt-">
        <h1 className="text-5xl font-semibold tracking-wider">
          Agentic AI <span className="text-red-500">Pioneer</span> <br/> Program
        </h1>
        <p className="mt-4 text-xl">Master AI Agents, Build the Future!</p>

        <div className="flex space-x-8 mt-8">
          <div className="text-center">
            <p className="text-xl font-semibold">50+</p>
            <p>Projects</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">10+</p>
            <p>Hours of Live Workshops Quarterly</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold">75+</p>
            <p>Mentorships</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold">150+</p>
            <p>Hours of learning</p>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-0 left-0 right-0  py-4 text-center">
        <button className="bg-gray-800 px-6 py-3 rounded hover:bg-gray-700">
          Become an Agentic AI Expert
        </button>
      </footer>
    </div>
  );
};

export default HeroSection;