import { useLocation, useNavigate } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

export default function ContactPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const prefilledConfig = location.state?.prefilledConfig || null;

  const handleClearPrefilled = () => {
    navigate('.', { replace: true, state: {} });
  };

  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      {/* Banner Section */}
      <div className="relative w-full h-[15vh] md:h-[20vh] min-h-[140px] flex items-center justify-center overflow-hidden">
        <img 
          src="/contact-banner.png" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl mx-auto px-4 mt-8">
          <h1 className="font-hero text-5xl md:text-6xl text-white tracking-tight mb-4">Contact Us</h1>
        </div>
      </div>

      <div className="mt-8 md:mt-12">
        <BookingForm prefilledConfig={prefilledConfig} onClearPrefilled={handleClearPrefilled} />
      </div>
    </div>
  );
}
