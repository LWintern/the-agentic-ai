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

  return (
    <div className="h-full bg-black text-white flex flex-col items-center justify-center p-4">
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
            <h2 className="text-2xl font-bold">Upskill, Reskill, Thrive</h2>
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
                  <div className="flex items-center bg-zinc-800 border border-r-0 border-zinc-700 rounded-l-md px-2">
                    <Image
                      src="/placeholder.svg?height=20&width=30"
                      alt="India flag"
                      width={24}
                      height={16}
                      className="mr-1"
                    />
                    <span className="text-sm text-zinc-400">+91</span>
                  </div>
                  <Input
                    id="phoneNumber"
                    placeholder="Your Phone Number"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 rounded-l-none"
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
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700"
                    }`}
                    onClick={() => setExperience(exp)}
                  >
                    {exp}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="border-zinc-600 data-[state=checked]:bg-indigo-600" />
                <label htmlFor="terms" className="text-sm text-zinc-300">
                  I Agree to the{" "}
                  <Link href="#" className="text-blue-400 hover:underline">
                    Terms & Conditions
                  </Link>
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="whatsapp" className="border-zinc-600 data-[state=checked]:bg-indigo-600" />
                <label htmlFor="whatsapp" className="text-sm text-zinc-300">
                  Send WhatsApp Updates
                </label>
              </div>
            </div>

            <div className="py-2">
              <div className="border border-zinc-700 rounded p-4 bg-zinc-800/50 w-fit">
                {/* This is just a placeholder for the reCAPTCHA */}
                <div className="flex items-center gap-2">
                  <Checkbox id="captcha" className="border-zinc-600" />
                  <label htmlFor="captcha" className="text-sm text-zinc-300">
                    I'm not a robot
                  </label>
                </div>
                <div className="flex justify-end mt-2">
                  <Image src="/placeholder.svg?height=40&width=60" alt="reCAPTCHA logo" width={60} height={40} />
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6">Join the program now!!</Button>
          </CardFooter>
        </Card>

        {/* Expert Guidance Section */}
        <div className="flex-1 lg:max-w-xs space-y-8 pt-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get Expert Guidance</h2>
            <p className="text-gray-400">Need support? We've got your back anytime!</p>
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
                <p className="text-sm text-gray-400">You'll hear back in 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

