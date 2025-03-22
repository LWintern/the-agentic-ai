import HeroSection from '@/components/customComponents/AgenticAIBanner'

import CardLayout from '@/components/customComponents/LifeAtAgenticAi'


import NameCalculator from '@/components/customComponents/NameCalculator'
import ProjectsSection from '@/components/customComponents/ProjectSection'
import { TimelineDemo } from '@/components/customComponents/TimeLine'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <HeroSection /> 
   <CardLayout />
   <TimelineDemo />
   <ProjectsSection/>  
    {/* <NameCalculator /> */}
   </>  )
}
