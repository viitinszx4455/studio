import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import MarqueeSection from '@/components/sections/marquee-section';
import Projects from '@/components/sections/projects';
import Workflow from '@/components/sections/workflow';
import Faq from '@/components/sections/faq';
import Cta from '@/components/sections/cta';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
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
