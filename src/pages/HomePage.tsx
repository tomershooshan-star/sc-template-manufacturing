import { Hero } from '../components/Hero';
import { Capabilities } from '../components/Capabilities';
import { ProcessFlow } from '../components/ProcessFlow';
import { Services } from '../components/Services';
import { StatsBar } from '../components/StatsBar';
import { Certifications } from '../components/Certifications';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { CTABanner } from '../components/CTABanner';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Capabilities />
      <ProcessFlow />
      <Services />
      <StatsBar />
      <Certifications />
      <About />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
