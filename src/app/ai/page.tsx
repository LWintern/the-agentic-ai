import Hero from "@/components/CoursePage/Hero";

import AIRoadmap from "@/components/customComponents/landingpage/Roadmap";

import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact'
export default function Home() {
  return (
   <>
   <Hero/>
   <AIRoadmap/>
   {/* todo add project section */}
   <ContactForm/>
   <FAQ/>

   </> 

)
}
