import HeroSection from '@/components/customComponents/AgenticAIBanner'
import LifeAtFuturenese from '@/components/customComponents/LifeAtAgenticAi'
import CardLayout from '@/components/customComponents/LifeAtAgenticAi'
import LifeAtAgenticAi from '@/components/customComponents/LifeAtAgenticAi'

import NameCalculator from '@/components/customComponents/NameCalculator'
import ProjectsSection from '@/components/customComponents/ProjectSection'
import Image from 'next/image'
import Levels from "@/components/customComponents/landingpage/Levels"
import Footer from '@/components/customComponents/Footer'

import ContactForm from '@/components/customComponents/landingpage/Contact'
export default function Home() {
  return (
   <>
   <HeroSection /> 
   <CardLayout />
   <ProjectsSection/>  
    {/* <NameCalculator /> */}
    <Levels />
    <ContactForm />
    <Footer />
   </>  )
}
