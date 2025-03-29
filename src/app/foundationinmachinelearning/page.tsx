import Hero from "@/components/CoursePage/Hero";

import AIRoadmap from "@/components/customComponents/landingpage/Roadmap";

import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "../../components/CoursePage/project/Project";
import CertificateDisplay from "@/components/CoursePage/Cert";
export default function Home() {
  return (
   <>
   <Hero/>
   <AIRoadmap/>
   <ProgramsSection/>
   {/* todo add project section */}
   <ContactForm/>
    <CertificateDisplay/>
   <FAQ/>

   </> 

)
}
