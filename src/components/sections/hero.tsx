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
        <div className="flex flex-col lg:items-start items-center">
          <h1 className="text-6xl lg:text-9xl font-bold text-white font-headline">Design</h1>
          <div className="flex flex-col lg:ml-[10rem] lg:items-start items-center">
            <h1 className="text-6xl lg:text-9xl font-headline italic bg-gradient-to-r from-[#9160E6] via-primary to-[#290E58] bg-clip-text text-transparent">Sites</h1>
            <h1 className="text-6xl lg:text-9xl font-bold text-white font-headline">Conversão</h1>
          </div>
        </div>
      </div>
      
      <div className="container flex flex-col-reverse lg:flex-row lg:justify-between items-center text-center lg:text-left mt-8 lg:mt-5 gap-8">
        <div className="space-y-4 lg:w-1/2">
          <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Sites modernos, rápidos e feitos sob medida para destacar sua marca e atrair resultados reais.
          </p>
          <div className="flex gap-3 justify-center lg:justify-start items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-[#290E58] bg-[length:200%_100%] bg-right hover:bg-left transition-all duration-500 text-white font-semibold rounded-full px-8 py-6 text-base animate-ultraSlowBlueGradient shadow-lg hover:shadow-primary/50">
              <a href="https://wa.me/5562991210362?text=Olá, gostaria de saber mais sobre o seu serviço de criação de sites." target="_blank" rel="noopener noreferrer">Quero meu site personalizado</a>
            </Button>
            <Button asChild size="icon" className="h-14 w-14 lg:h-12 lg:w-12 rounded-full bg-gradient-to-r from-primary to-[#290E58] bg-[length:200%_100%] bg-right hover:bg-left transition-all duration-500 text-white font-semibold relative cursor-pointer shadow-lg hover:shadow-primary/50">
              <a href="https://wa.me/5562991210362?text=Olá, gostaria de saber mais sobre o seu serviço de criação de sites." target="_blank" rel="noopener noreferrer">
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col items-center lg:items-end justify-center">
          <div className="flex gap-2 mb-4">
            {clients.map((client, index) => client && (
              <div key={index} className="w-10 h-10 rounded-full overflow-hidden shadow-md">
                <Image src={client.imageUrl} alt={client.description} width={40} height={40} className="w-full h-full object-cover" data-ai-hint={client.imageHint} />
              </div>
            ))}
          </div>
          <p className="flex items-center gap-2 text-muted-foreground text-lg">
            <CircleCheckBig className="w-5 h-5 text-primary" />
            +50 clientes aprovam a <span className="text-primary font-semibold">Nexora</span>
          </p>
        </div>
      </div>
    </section>
  );
}
