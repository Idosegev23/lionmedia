import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessSteps from '@/components/ProcessSteps';
import Results from '@/components/Results';
import CTABand from '@/components/CTABand';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <ServicesGrid />
      <ProcessSteps />
      <Results />
      <CTABand />
    </>
  );
}
