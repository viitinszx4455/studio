import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import MarqueeSection from '@/components/sections/marquee-section';
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
        className="fixed top-0 left-0 w-full h-full z-0"
        style={{
          background: 'radial-gradient(circle at center, #1A1A1A 0%, #000000 60%, #111111 100%)',
          opacity: 0.3,
          filter: 'blur(160px)',
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
        <Projects />
        <section className="container relative flex flex-col items-center justify-center pt-16 lg:pt-24">
            <h2 className="lg:text-7xl text-4xl text-center font-semibold font-headline text-white">
                CRIATIVOS ESCALADOS
            </h2>
        </section>
        <Workflow />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
