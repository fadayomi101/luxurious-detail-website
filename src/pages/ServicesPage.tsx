import { useNavigate } from 'react-router-dom';
import ServicesEstimator from '../components/ServicesEstimator';
import servicesBanner from '../assets/services-banner-latest.jpeg';

export default function ServicesPage() {
  const navigate = useNavigate();

  const handleSelectEstimatorConfig = (config: any) => {
    navigate('/contact', { state: { prefilledConfig: config } });
  };

  return (
    <div className="pt-20 lg:pt-24">
      {/* Banner Section */}
      <div 
        className="relative w-full h-[15vh] md:h-[20vh] min-h-[140px] flex items-center justify-center bg-[#111] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${servicesBanner})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl mx-auto px-4 mt-8">
          <h1 className="font-hero text-5xl md:text-6xl text-white tracking-tight mb-4">Our Services</h1>
          <p className="text-gray-200">Select an experience collection detail package tailored to perfection.</p>
        </div>
      </div>
      
      <div className="mt-4 md:mt-8">
        <ServicesEstimator isHome={false} onSelectConfiguration={handleSelectEstimatorConfig} />
      </div>
    </div>
  );
}
