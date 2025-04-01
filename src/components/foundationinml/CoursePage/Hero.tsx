import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative w-full h-[600px] md:h-screen overflow-x-hidden bg-[linear-gradient(to_bottom_right,#8b2fd3CC_0%,#040106_25%,#040106_75%,#ca2571CC_100%)]">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] md:w-[800px] md:h-[500px] bg-purple-800 rounded-full filter blur-[150px] opacity-10 -z-10"></div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight sm:leading-[1.1] font-bold mb-4 sm:mb-6 tracking-tight bg-gradient-to-b from-white to-white/90 bg-clip-text text-transparent">
          Foundation in{" "}
          <span className="block">Machine Learning</span>
        </h1>

        {/* Course Badges */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10">
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50">
            <span className="text-zinc-400">⏱️ Duration:</span>
            <span className="ml-2 text-white">14 hrs</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50">
            <span className="text-zinc-400">💰 Fee:</span>
            <span className="ml-2 text-white">4999 + Taxes</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50">
            <span className="text-zinc-400">🎯</span>
            <span className="ml-2 text-white">Weekend batch</span>
          </div>
        </div>

        {/* CTA Button */}
        <a href="https://rzp.io/rzp/lOLC1zs" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="rounded-full px-6 sm:px-8 py-4 sm:py-6 h-auto text-[14px] sm:text-[15px] font-medium 
            bg-zinc-800/50 hover:bg-zinc-700/50 
            border-zinc-700/50 hover:border-zinc-600/50
            text-white hover:text-white/90 
            transition-all duration-200"
          >
            Book your seat now
          </Button>
        </a>
      </div>
    </div>
  );
}