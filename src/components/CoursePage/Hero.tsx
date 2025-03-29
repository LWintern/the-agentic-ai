import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative w-full min-h-[50vh] bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-600 rounded-full filter blur-[120px] opacity-20 -z-10"></div> 
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-800 rounded-full filter blur-[150px] opacity-10 -z-10"></div>
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20">
        {/* Announcement text */}
        <div className="mb-10">
          <p className="text-sm font-medium text-zinc-400/90">
            Next cohort starts on April 2nd, 2025 <span className="ml-1">🎉</span>
          </p>
        </div>

        {/* Main heading */}
        <h1 className="text-[3.5rem] leading-[1.1] sm:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-b from-white to-white/90 bg-clip-text text-transparent">
          Master Data Science &{" "}
          <span className="block">Artificial Intelligence</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl mb-6 text-zinc-200/90">
          Transform your career in a 6 month program.
        </p>

        {/* Description */}
        <p className="text-base text-zinc-400/90 mb-10 max-w-2xl leading-relaxed">
          Structured learning and a curated community in one membership where you learn to analyse data, build predictive
          models, and apply AI techniques to solve real-world problems.
        </p>

        {/* CTA Button */}
        <Button
          variant="outline"
          className="rounded-full px-8 py-6 h-auto text-[15px] font-medium 
          bg-zinc-800/50 hover:bg-zinc-700/50 
          border-zinc-700/50 hover:border-zinc-600/50
          text-white hover:text-white/90 
          transition-all duration-200"
        >
          Apply Now
        </Button>
      </div>
    </div>
  )
}