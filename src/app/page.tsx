import HeroSection from '@/components/customComponents/AgenticAIBanner'

import CardLayout from '@/components/customComponents/LifeAtAgenticAi'


import NameCalculator from '@/components/customComponents/NameCalculator'
import ProjectsSection from '@/components/customComponents/ProjectSection'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <HeroSection /> 
   <CardLayout />
   <ProjectsSection/>  
    {/* <NameCalculator /> */}
   </>  )
}
