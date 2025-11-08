import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import MarqueeSection from '@/components/sections/marquee-section';
import Services from '@/components/sections/services';
import Projects from '@/components/sections/projects';
import Workflow from '@/components/sections/workflow';
import Faq from '@/components/sections/faq';
import Cta from '@/components/sections/cta';
import Footer from '@/components/layout/footer';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const bgHero = PlaceHolderImages.find((img) => img.id === 'background-hero');
  return (
    <div className="relative overflow-x-hidden bg-background">
      <div
        aria-hidden="true"
        className="fixed top-[-500px] left-1/2 z-0 -translate-x-1/2"
        style={{
          width: '900px',
          height: '900px',
          backgroundColor: 'rgb(83, 28, 179)',
          opacity: 0.7,
          filter: 'blur(160px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      ></div>
      <div
        aria-hidden="true"
        className="fixed bottom-[-500px] left-1/2 z-0 -translate-x-1/2"
        style={{
          width: '900px',
          height: '900px',
          backgroundColor: 'rgb(83, 28, 179)',
          opacity: 0.4,
          filter: 'blur(160px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      ></div>
      {bgHero && (
        <Image
          src={bgHero.imageUrl}
          alt="Abstract background"
          fill
          className="absolute inset-0 object-cover opacity-5 pointer-events-none"
          data-ai-hint={bgHero.imageHint}
        />
      )}

      <Header />
      <main className="relative z-10">
        <Hero />
        <MarqueeSection />
        <Services />
        <Projects />
        <Workflow />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
