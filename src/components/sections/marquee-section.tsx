import { Rocket, Megaphone, Wrench } from 'lucide-react';

const marqueeItems = [
  { icon: <Rocket className="size-5 lg:size-6" />, text: 'Resultados visíveis desde o primeiro dia' },
  { icon: <Megaphone className="size-5 lg:size-6" />, text: 'Estratégia de conversão aplicada em cada seção' },
  { icon: <Wrench className="size-5 lg:size-6" />, text: 'Suporte e manutenção simples' },
];

const marqueeItems2 = [
  { icon: <Wrench className="size-5 lg:size-6" />, text: 'Sites otimizados para performance' },
  { icon: <Rocket className="size-5 lg:size-6" />, text: 'Design estratégico e moderno' },
  { icon: <Megaphone className="size-5 lg:size-6" />, text: 'Conversão que gera resultado' },
];

const MarqueeRow = ({ items, className }: { items: { icon: React.ReactNode, text: string }[], className?: string }) => (
    <div className={`flex items-center ${className}`}>
        {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center shrink-0 text-base lg:text-lg font-medium mx-6 lg:mx-10 gap-3 whitespace-nowrap">
                {item.icon}
                <span>{item.text}</span>
            </div>
        ))}
    </div>
);

export default function MarqueeSection() {
  return (
    <div className="relative w-full h-[250px] lg:h-[300px] flex items-center justify-center overflow-hidden bg-transparent my-16 lg:my-24">
      <div className="absolute top-1/2 left-1/2 w-[200vw] lg:w-[160vw] -translate-x-1/2 -translate-y-[80%] rotate-[6deg] lg:rotate-[4deg]">
        <div className="bg-gray-deep/70 py-4 lg:py-8 shadow-2xl backdrop-blur-sm rounded-lg w-full h-full">
            <div className="absolute inset-0 animate-marquee-left-mobile lg:animate-marquee-left">
                <MarqueeRow items={marqueeItems} className="text-white" />
            </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 w-[200vw] lg:w-[160vw] -translate-x-1/2 -translate-y-[20%] -rotate-[6deg] lg:-rotate-[4deg]">
        <div className="bg-gray-deep/70 py-4 lg:py-8 shadow-2xl backdrop-blur-sm rounded-lg w-full h-full">
            <div className="absolute inset-0 animate-marquee-right-mobile lg:animate-marquee-right">
                <MarqueeRow items={marqueeItems2} className="text-purple-light" />
            </div>
        </div>
      </div>
    </div>
  );
}
