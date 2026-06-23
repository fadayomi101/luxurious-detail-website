import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesEstimator from '../components/ServicesEstimator';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  const navigate = useNavigate();

  const scrollToBooking = () => {
    navigate('/contact');
  };

  const handleSelectEstimatorConfig = (config: any) => {
    navigate('/contact', { state: { prefilledConfig: config } });
  };

  return (
    <>
      <Hero onOpenBooking={scrollToBooking} />
      <About />
      <ServicesEstimator isHome={true} onSelectConfiguration={handleSelectEstimatorConfig} />
      <BeforeAfterGallery />
      <Testimonials />
      <FAQ />
    </>
  );
}
