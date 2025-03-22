import HeroSection from '@/components/customComponents/AgenticAIBanner'

import CardLayout from '@/components/customComponents/LifeAtAgenticAi'


// import NameCalculator from '@/components/customComponents/NameCalculator'
import ProjectsSection from '@/components/customComponents/ProjectSection'
import Image from 'next/image'
import Levels from "@/components/customComponents/landingpage/Levels"
import Footer from '@/components/customComponents/Footer'

import ContactForm from '@/components/customComponents/landingpage/Contact'

import AIRoadmap from "@/components/customComponents/landingpage/Roadmap"
export default function Home() {
  return (
   <>
   <HeroSection /> 
   {/* <CardLayout /> */}
   {/* <ProjectsSection/>   */}
    {/* <NameCalculator /> */}
    {/* <Levels /> */}
    <AIRoadmap />
    <ContactForm />
    <Footer />
   </>  )
}
