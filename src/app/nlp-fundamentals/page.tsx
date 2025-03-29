import Hero from "@/components/nlpfundamentals/CoursePage/Hero";

import AIRoadmap from "@/components/customComponents/landingpage/Roadmap";

import FAQ from '@/components/customComponents/Faq';
import ContactForm from '@/components/customComponents/landingpage/Contact';
import ProgramsSection from "@/components/nlpfundamentals/CoursePage/project/Project";
import CertificateDisplay from "@/components/nlpfundamentals/CoursePage/Cert";
export default function Home() {
  return (
   <>
   <Hero/>
   <AIRoadmap/>
   <ProgramsSection/>
   {/* todo add project section */}
   <CertificateDisplay/>
   <ContactForm/>
   
   {/* <FAQ/> */}

   </> 

)
}
