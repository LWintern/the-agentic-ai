import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { roadmapData } from "../../../data/timeline";
import Link from "next/link";
export function TimelineDemo() {
  return (
    <div className="w-full">
      <Timeline
        data={roadmapData.map((levelData) => ({
          title: levelData.level,
          subtitle: levelData.subtitle,
          content: (
            <div className="mb-8">
              {levelData.capsules.map((capsule, index) => (
                <div
                  key={index}
                  className="mb-8 p-4 border border-gray-700 rounded-lg shadow-md relative bg-black"
                >
                  {/* Badge as a Button with Link */}
                  {capsule.badgeLink ? (
                    <a 
                      href={capsule.badgeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold py-1 px-2 rounded-bl-lg hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      {capsule.badge}
                    </a>
                  ) : (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold py-1 px-2 rounded-bl-lg">
                      {capsule.badge}
                    </div>
                  )}
          <Link href="/foundationinmachinelearning" className="coursor-pointer">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    <div className="font-bold text-2xl">{capsule.name}</div>
                  </h3>
                  </Link>
                  <p className="text-md md:text-lg font-semibold mb-2 text-gray-300">
                    <span className="font-bold">Key Outcome:</span> {capsule.outcome}
                  </p>

                  <div className="flex justify-between items-center text-gray-300">
                    <span className="px-3 py-1 bg-gray-800 border gradient-border rounded-lg">Duration: {capsule.duration}</span>
                    
                    <span className="px-3 py-1 bg-gray-800 border gradient-border rounded-lg">Price: ₹ {capsule.price}</span>
                  </div>
                </div>
              ))}
            </div>
          ),
        }))} 
      />
    </div>
  );
}