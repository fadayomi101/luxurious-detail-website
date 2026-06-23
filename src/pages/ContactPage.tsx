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
    <div className="pt-24 lg:pt-32 min-h-screen">
      <div className="text-center max-w-3xl mx-auto px-4 mb-12">
        <h1 className="font-hero text-5xl md:text-6xl text-gray-900 tracking-tight mb-4">Contact Us</h1>
        <p className="text-gray-600">Schedule your concourse detailing right here or reach out with any inquiries.</p>
      </div>
      <BookingForm prefilledConfig={prefilledConfig} onClearPrefilled={handleClearPrefilled} />
    </div>
  );
}
