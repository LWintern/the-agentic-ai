"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProgramsSection() {
  const tracks = [
    {
      number: "01",
      title: "Data Specialist",
      titleColor: "text-orange-300",
      experience: "1-3 years of experience",
      description: "Be the driving force of data transformation and pave the way for excellence in the dynamic world of data and analytics!.",
    },
    {
      number: "02",
      title: "Data Specialist",
      titleColor: "text-purple-300",
      experience: "3-5 years of experience",
      description:
        "Be the driving force of data transformation and pave the way for excellence in the dynamic world of data and analytics!",
    },
    {
      number: "03",
      title: "Embeded SDE",
      titleColor: "text-green-300",
      experience: "3-5 years of experience",
      description:
        "Be the driving force of data transformation and pave the way for excellence in the dynamic world of data and analytics!",
    },
    {
      number: "04",
      title: "Java Developers",
      titleColor: "text-amber-300",
      experience: "3-5 years of experience",
      description:
        "Be the driving force of data transformation and pave the way for excellence in the dynamic world of data and analytics!",
    },
  ]

  return (
    <section className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider mb-2">PROGRAMS</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ready To Join The Family?</h1>
          <p className="text-lg">Choose a track where you know you'll shine!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <Card key={index} className="bg-black border border-gray-800 rounded-lg overflow-hidden">
              <CardHeader className="pb-2">
                <p className="text-sm text-gray-400">TRACK {track.number}</p>
                <CardTitle className={`text-2xl font-bold ${track.titleColor}`}>{track.title}</CardTitle>
                <p className="text-sm text-gray-300">{track.experience}</p>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-sm text-gray-300">{track.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black transition-colors"
                >
                  Apply now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

