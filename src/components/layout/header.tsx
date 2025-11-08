'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const logo = PlaceHolderImages.find((img) => img.id === 'logo');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn("fixed top-0 left-0 w-full z-50 transition-all duration-300", scrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent')}>
      <div className="container mx-auto flex items-center justify-between transition-all duration-300 py-4">
        <Link href="#home" className="flex items-center gap-2">
          {logo && <Image src={logo.imageUrl} alt="Logo da agência" width={36} height={36} className="w-9 h-9" data-ai-hint={logo.imageHint} />}
          <span className="lg:text-xl text-[1.4rem] font-medium text-gray-400" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>SCALE</span>
        </Link>
        <nav className="hidden lg:flex bg-secondary/30 backdrop-blur-sm py-[0.4rem] rounded-full items-center justify-between gap-10 transition-all duration-300">
          <ul className="flex items-center gap-6 px-[2rem]">
            <li><Link href="#home" className="text-[0.9rem] font-medium text-foreground hover:text-muted-foreground transition-colors">Home</Link></li>
            <li><Link href="#projetos" className="text-[0.9rem] font-medium text-foreground hover:text-muted-foreground transition-colors">Projetos</Link></li>
            <li><Link href="#quem-somos" className="text-[0.9rem] font-medium text-foreground hover:text-muted-foreground transition-colors">Quem somos</Link></li>
            <li><Link href="#contatos" className="text-[0.9rem] font-medium text-foreground hover:text-muted-foreground transition-colors">Contatos</Link></li>
          </ul>
          <Button asChild className="bg-gradient-to-r from-primary to-[#290E58] bg-[length:200%_100%] bg-right hover:bg-left transition-all duration-500 text-white font-semibold rounded-full px-6 mx-[0.5rem] text-[0.8rem] h-9 shadow-md hover:shadow-lg hover:brightness-110 animate-ultraSlowBlueGradient">
            <a href="https://wa.me/5562991210362?text=Olá, gostaria de saber mais sobre o seu serviço de criação de sites." target="_blank" rel="noopener noreferrer">Quero meu site</a>
          </Button>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://www.instagram.com/nexora.ag/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/80 hover:bg-primary/90 rounded-full flex items-center justify-center cursor-pointer">
            <Instagram className="w-5 h-5 text-white" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61581107199846" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/80 hover:bg-primary/90 rounded-full flex items-center justify-center cursor-pointer">
            <Facebook className="w-5 h-5 text-white" />
          </a>
          <a href="https://wa.me/5562991210362?text=Olá, gostaria de saber mais sobre o seu serviço de criação de sites." target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary/80 hover:bg-primary/90 rounded-full flex items-center justify-center cursor-pointer">
            <MessageCircle className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </header>
  );
}
