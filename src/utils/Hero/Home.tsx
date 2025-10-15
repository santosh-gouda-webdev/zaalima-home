
import { HeroParallaxDemo } from './Hero';
import { ClientSection } from '../logos/Logos';
import FeaturesSectionDemo3 from '@/components/features-section-demo-3';
import About from './About';
import FeaturesSectionDemo2 from '@/components/features-section-demo-2';
import { WorldMapDemo } from './WorldMap';
import { AnimatedTeamDemo } from './Testimonials';
import FaqPage from './Faq';
import { InternshipModal } from '../modal/InternshipModal';
import { useEffect, useState } from 'react';
const Home = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 4000);
    
    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="">
      <InternshipModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <HeroParallaxDemo />
      <ClientSection />
      <About />
      <FeaturesSectionDemo3 />
      <FeaturesSectionDemo2 />
      <WorldMapDemo />
      {/* <Team /> */}
      <AnimatedTeamDemo />
      <FaqPage />
    </div>
  )
}

export default Home