"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactForm() {
  const [experience, setExperience] = useState<string>("0-3yrs")
  const [whatsappUpdates, setWhatsappUpdates] = useState(false)

  return (
    <div className="w-full bg-black">
    <div className="h-full max-w-5xl mx-auto text-white flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Contact Us Today</h1>
        <p className="text-gray-300">
          Take the first step towards a future of innovation & excellence with Analytics Vidhya
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Form Section */}
        <Card className="flex-1 bg-zinc-900/50 border-zinc-800 text-white">
          <CardHeader className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Upskill, Reskill, Thrive
            </h2>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  placeholder="Your Full Name"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="text-sm">
                  Phone Number
                </label>
                <div className="flex">
                  <div className="flex items-center bg-zinc-800/50 border border-r-0 border-zinc-700 rounded-l-md px-3 py-2">
                    {/* <Image
                      src="/assets/India.jpg"
                      alt="India flag"
                      width={24}
                      height={16}
                      className="mr-2"
                    /> */}
                    
                  </div>
                  <Input
                    id="phoneNumber"
                    placeholder="Your Phone Number"
                    className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 rounded-l-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm">
                Email Id
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email Id"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Experience :</label>
              <div className="flex flex-wrap gap-2">
                {["0-3yrs", "3-8yrs", "8-12yrs", "12yrs+"].map((exp) => (
                  <Button
                    key={exp}
                    variant="outline"
                    size="sm"
                    className={`rounded-full px-4 ${
                      experience === exp
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent"
                        : "bg-zinc-800/50 text-zinc-300 border-zinc-700 hover:bg-zinc-700"
                    }`}
                    onClick={() => setExperience(exp)}
                  >
                    {exp}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="whatsapp"
                checked={whatsappUpdates}
                onCheckedChange={(checked) => setWhatsappUpdates(checked as boolean)}
                className="border-zinc-700 data-[state=checked]:bg-indigo-600"
              />
              <label
                htmlFor="whatsapp"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Send WhatsApp Updates
              </label>
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6">
              Join the program now!!
            </Button>
          </CardFooter>
        </Card>

        {/* Expert Guidance Section */}
        <div className="flex-1 lg:max-w-xs space-y-8 pt-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get Expert Guidance</h2>
            <p className="text-gray-400">Need support? We&apos;ve got your back anytime!</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-zinc-800 p-3 rounded-full">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <a href="tel:+919354711240" className="text-indigo-400 font-medium hover:underline">
                  +91-9354711240
                </a>
                <p className="text-sm text-gray-400">10AM - 7PM (IST) Mon-Sun</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-zinc-800 p-3 rounded-full">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <a
                  href="mailto:customersupport@analyticsvidhya.com"
                  className="text-indigo-400 font-medium hover:underline break-all"
                >
                  customersupport@analyticsvidhya.com
                </a>
                <p className="text-sm text-gray-400">You&apos;ll hear back in 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

