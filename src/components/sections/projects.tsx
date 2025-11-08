'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  { id: 'repcount', name: 'RepCount', description: 'Landing page para um WebApp da marca RepCount', link: 'https://repcountt.netlify.app/', imageId: 'project-repcount' },
  { id: 'fortinvest', name: 'FortInvest', description: 'Plataforma de investimentos personalizada', link: 'https://fortinvest.netlify.app/', imageId: 'project-fortinvest' },
  { id: 'jamesjnor', name: 'JamesJnor', description: 'LinkBio personalizado com o tema Deus Grego', link: 'https://jamesjnor.netlify.app/', imageId: 'project-jamesjnor' },
  { id: 'liubarbearia', name: 'LiuBarbearia', description: 'Landing page para barbearia com agendamento online', link: 'https://liubarbeariaa.netlify.app/', imageId: 'project-liubarbearia' },
  { id: 'cinematic', name: 'CINEMATIC', description: 'Landing page para cinemas e filmes', link: '#', imageId: 'project-cinematic' },
];

export default function Projects() {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {projects.map((project) => {
          const image = PlaceHolderImages.find(img => img.id === project.imageId);
          return (
            <div key={project.id} className="group flex flex-col gap-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-[1.02]">
                {image && (
                  <Image 
                    src={image.imageUrl} 
                    alt={project.name} 
                    width={720} 
                    height={420} 
                    className="w-full h-auto object-cover"
                    data-ai-hint={image.imageHint}
                  />
                )}
              </a>
              <div className="space-y-1 text-left">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <p className="text-gray-medium">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
