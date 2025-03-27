import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-black text-white py-6 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full filter blur-[120px] opacity-20 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-800 rounded-full filter blur-[150px] opacity-10 -z-10"></div>
      
      <main className="flex flex-col items-center text-center z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wider">
          Agentic AI <span className="text-[#FF3366]">Pioneer</span> Program
        </h1>
        <p className="mt-4 text-xl text-gray-300">Master AI Agents, Build the Future!</p>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center">
            <p className="text-3xl font-bold">50+</p>
            <p className="text-gray-400">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">10+</p>
            <p className="text-gray-400">Hours of Live<br/>Workshops Quarterly</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">75+</p>
            <p className="text-gray-400">Mentorships</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">150+</p>
            <p className="text-gray-400">Hours of learning</p>
          </div>
        </div>

        <div className="mt-12 w-full max-w-md backdrop-blur-lg bg-black/30 p-6 rounded-lg border border-gradient">
          <h2 className="text-2xl font-bold mb-6">Become an Agentic AI Expert</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-4 py-2 bg-black/50 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
            />
            <div className="flex gap-4">
              <div className="flex-1">
                <select className="w-full px-4 py-2 bg-black/50 rounded border border-gray-600 focus:border-purple-500 focus:outline-none">
                  <option value="+91">🇮🇳 +91</option>
                </select>
              </div>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="flex-[2] px-4 py-2 bg-black/50 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email Id"
              className="w-full px-4 py-2 bg-black/50 rounded border border-gray-600 focus:border-purple-500 focus:outline-none"
            />
            {/* <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" id="terms" className="rounded bg-black/50 border-gray-600" />
              <label htmlFor="terms">I Agree to the <a href="#" className="text-purple-400">Terms & Conditions</a></label>
            </div> */}
            {/* <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" id="whatsapp" className="rounded bg-black/50 border-gray-600" />
              <label htmlFor="whatsapp">Send WhatsApp Updates</label>
            </div> */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Download Brochure
            </button>
          </form>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          2d • 11h • 35m • 50s
        </div>
      </main>

      <div className="absolute top-4 right-4 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold">
        AI Breakthrough Offer →
      </div>
    </div>
  );
};


export default HeroSection;