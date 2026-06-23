import About from '../components/About';

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32 min-h-screen">
      <div className="text-center max-w-3xl mx-auto px-4 mb-4">
        <h1 className="font-hero text-5xl md:text-6xl text-gray-900 tracking-tight mb-4">Our Philosophy</h1>
      </div>
      <About />
    </div>
  );
}
