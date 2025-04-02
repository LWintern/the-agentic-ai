import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[50vh] overflow-x-hidden bg-[linear-gradient(to_bottom_right,#8b2fd3CC_0%,#040106_30%,#040106_70%,#ca2571CC_100%)]">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[00px] bg-purple-800 rounded-full filter blur-[150px] opacity-10 -z-10"></div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight sm:leading-[1.1] font-bold mb-6 tracking-tight bg-gradient-to-b from-white to-white/90 bg-clip-text text-transparent">
          Advanced Computer{" "}
          <span className="block">Vision</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl mb-6 text-zinc-200/90">
          Object detection, GANs, Style Transfer
        </p>

        {/* Course Badges */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50">
            <span className="text-zinc-400">⏱️ Duration:</span>
            <span className="ml-2 text-white">12 hrs</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50">
            <span className="text-zinc-400">💰 Fee:</span>
            <span className="ml-2 text-white">2999 + Taxes</span>
          </div>
          <div className="px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50">
            <span className="text-zinc-400">🎯</span>
            <span className="ml-2 text-white">Weekend batch</span>
          </div>
        </div>

        {/* CTA Button */}
        <a href="https://rzp.io/rzp/yl3TTvM" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="rounded-full px-8 py-4 sm:py-6 h-auto text-[14px] sm:text-[15px] font-medium 
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