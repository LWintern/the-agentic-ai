import HeroSection from '@/components/customComponents/AgenticAIBanner'

// import CardLayout from '@/components/customComponents/LifeAtAgenticAi'


// import NameCalculator from '@/components/customComponents/NameCalculator'
import ProjectsSection from '@/components/customComponents/ProjectSection'
import { TimelineDemo } from '@/components/customComponents/TimeLine'
import Image from 'next/image'
import Levels from "@/components/customComponents/landingpage/Levels"
import Footer from '@/components/customComponents/Footer'

import ContactForm from '@/components/customComponents/landingpage/Contact'

import AIRoadmap from "@/components/customComponents/landingpage/Roadmap"
import App from '@/components/customComponents/CourseModule'
import Navbar from '@/components/customComponents/navbar/Navbar'
import FactAndFigures from '@/components/customComponents/Faq'
import FAQ from '@/components/customComponents/Faq'
export default function Home() {
  return (
   <>
   <Navbar />
   <HeroSection /> 
   <FAQ />
   {/* <App /> */}
   {/* <CardLayout /> */}
   <TimelineDemo />
    
   {/* <ProjectsSection/>   */}
   {/* <CardLayout /> */}
   {/* <ProjectsSection/>   */}
    {/* <NameCalculator /> */}
    <Levels />
    <AIRoadmap />
    <ContactForm />
    <Footer />
   </>  )
}
