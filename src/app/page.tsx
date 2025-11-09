import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import MarqueeSection from '@/components/sections/marquee-section';
import Projects from '@/components/sections/projects';
import Workflow from '@/components/sections/workflow';
import Faq from '@/components/sections/faq';
import Cta from '@/components/sections/cta';
import Footer from '@/components/layout/footer';
import VideoCreatives from '@/components/sections/video-creatives';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main className="relative z-10">
        <Hero />
        <MarqueeSection />
        <section className="container relative flex flex-col items-center justify-center pt-16 lg:pt-24">
            <h2 className="lg:text-7xl text-4xl text-center font-semibold font-headline text-white uppercase">
                CRIATIVOS ESCALADOS
            </h2>
        </section>
        <VideoCreatives />
        <Projects />
        <section id="entregaveis" className="w-full py-16 sm:py-20 md:py-24 flex flex-col items-center justify-center">
          <h2 className="text-center text-white font-bold uppercase tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-sm mb-12">
            ENTREGÁVEIS EM ÁREA DE MEMBROS
          </h2>
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-out">
              <Image src="https://i.imgur.com/Jx1C80y.png" alt="Área de Membros 1" width={600} height={400} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-out">
              <Image src="https://i.imgur.com/X9Keoxt.png" alt="Área de Membros 2" width={600} height={400} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-out">
              <Image src="https://i.imgur.com/opNvdb5.png" alt="Área de Membros 3" width={600} height={400} className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-out">
              <Image src="https://i.imgur.com/N4t7CKR.png" alt="Área de Membros 4" width={600} height={400} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
        <Workflow />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
