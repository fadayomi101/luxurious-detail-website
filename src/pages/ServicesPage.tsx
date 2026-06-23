import { useNavigate } from 'react-router-dom';
import ServicesEstimator from '../components/ServicesEstimator';

export default function ServicesPage() {
  const navigate = useNavigate();

  const handleSelectEstimatorConfig = (config: any) => {
    navigate('/contact', { state: { prefilledConfig: config } });
  };

  return (
    <div className="pt-24 lg:pt-32">
      <div className="text-center max-w-3xl mx-auto px-4 mb-12">
        <h1 className="font-hero text-5xl md:text-6xl text-gray-900 tracking-tight mb-4">Our Services</h1>
        <p className="text-gray-600">Select an experience collection detail package tailored to perfection.</p>
      </div>
      <ServicesEstimator isHome={false} onSelectConfiguration={handleSelectEstimatorConfig} />
    </div>
  );
}
