import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CircleCheckBig, ArrowUpRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const clientLogoIds = [
  'client-fortinvest',
  'client-jamesjnor',
  'client-liubarbearia',
  'client-repcount',
];

export default function Hero() {
  const clients = clientLogoIds.map(id => PlaceHolderImages.find(img => img.id === id)).filter(Boolean);

  return (
    <section id="home" className="container pt-24 lg:pt-32 pb-12 lg:pb-24">
      <div className="flex flex-col items-center justify-center lg:mt-12">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl lg:text-9xl font-bold text-white font-headline tracking-[-0.02em] leading-[1.1]">
            CREATIVES
          </h1>
          <h1 
            className="text-6xl lg:text-9xl font-bold font-headline italic tracking-[-0.02em] leading-[1.1]" 
            style={{ 
              background: 'linear-gradient(90deg, #ffffff 0%, #bfbfbf 50%, #7a7a7a 100%)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)' 
            }}
          >
            SCALE
          </h1>
        </div>
      </div>
    </section>
  );
}
