'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const projects = [
  { id: 'repcount', name: 'RepCount', description: 'Landing page para um WebApp da marca RepCount', link: 'https://repcountt.netlify.app/', imageId: 'project-repcount' },
  { id: 'fortinvest', name: 'FortInvest', description: 'Plataforma de investimentos personalizada', link: 'https://fortinvest.netlify.app/', imageId: 'project-fortinvest' },
  { id: 'jamesjnor', name: 'JamesJnor', description: 'LinkBio personalizado com o tema Deus Grego', link: 'https://jamesjnor.netlify.app/', imageId: 'project-jamesjnor' },
  { id: 'liubarbearia', name: 'LiuBarbearia', description: 'Landing page para barbearia com agendamento online', link: 'https://liubarbeariaa.netlify.app/', imageId: 'project-liubarbearia' },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[1]);
  const activeImage = PlaceHolderImages.find(img => img.id === activeProject.imageId);

  return (
    <section id="projetos" className="relative w-full pb-24 lg:pb-36 container">
      <div className="flex lg:justify-between flex-col lg:flex-row lg:mb-10">
        <h2 className="text-white text-center lg:text-left font-semibold font-headline lg:text-7xl text-4xl leading-tight mb-6">
          Nossos projetos <br /> falam por si.
        </h2>
        <p className="text-gray-medium max-w-xs mx-auto lg:mx-0 lg:text-right text-lg mb-12">
          Cada site é feito sob medida para impactar, gerar valor e resultados reais.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        <div className="lg:hidden w-full mb-8">
            <Carousel>
                <CarouselContent>
                    {projects.map((project, index) => {
                        const image = PlaceHolderImages.find(img => img.id === project.imageId);
                        return (
                            <CarouselItem key={index}>
                                {image && <Image src={image.imageUrl} alt={project.name} width={720} height={220} className="w-full h-[220px] object-cover rounded-2xl" data-ai-hint={image.imageHint} />}
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <div className="mt-6 flex justify-center gap-3">
                    <CarouselPrevious className="static translate-y-0" />
                    <CarouselNext className="static translate-y-0" />
                </div>
            </Carousel>
        </div>
        
        <div className="w-full lg:w-[40%]">
          <div className="flex flex-col gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={cn(
                  "flex items-center justify-between border-l-2 pl-3 gap-2 transition-all duration-300 cursor-pointer",
                  activeProject.id === project.id ? 'border-purple-main text-white' : 'border-transparent text-gray-medium hover:text-white/80'
                )}
                onMouseEnter={() => setActiveProject(project)}
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="opacity-70">{project.description}</p>
                </div>
                {activeProject.id === project.id && (
                  <Button asChild size="icon" className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-main to-purple-dark text-white flex-shrink-0 transition-transform duration-300 hover:rotate-12">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="mt-12 w-full lg:w-auto bg-gradient-to-r from-purple-main to-purple-dark bg-[length:200%_100%] bg-right hover:bg-left transition-all duration-500 text-white font-semibold rounded-full px-8 py-6 text-base shadow-lg hover:shadow-purple-main/50">
            <a href="https://wa.me/5562991210362?text=Olá, gostaria de saber mais sobre o seu serviço de criação de sites." target="_blank" rel="noopener noreferrer">
              Quero meu projeto agora
            </a>
          </Button>
        </div>

        <div className="relative hidden lg:w-[55%] lg:flex flex-col items-center justify-center">
          <div className="w-full max-w-[720px] h-[420px] overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.3)]">
            {activeImage && <Image src={activeImage.imageUrl} alt={activeProject.name} width={720} height={420} className="w-full h-full object-cover rounded-2xl transition-all duration-500" data-ai-hint={activeImage.imageHint} />}
          </div>
          <div className="absolute -bottom-10 flex justify-center w-full gap-3">
            {projects.map((project) => (
              <button
                key={project.id}
                aria-label={`Go to project ${project.name}`}
                onClick={() => setActiveProject(project)}
                className={cn("w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300", activeProject.id === project.id ? 'bg-purple-main scale-125' : 'bg-gray-500/40')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
