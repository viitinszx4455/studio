'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const workflowSteps = [
    {
        step: 1,
        title: "Entendimento e Estratégia",
        description: "Antes de tocar em qualquer linha de código, mergulhamos fundo no seu negócio. Mapeamos seu público, analisamos concorrentes e identificamos as oportunidades que vão colocar sua marca um passo à frente. Daqui nasce a estratégia que guia todo o projeto, clara, objetiva e feita sob medida pra gerar resultado real."
    },
    {
        step: 2,
        title: "Design e Prototipagem",
        description: "Com a estratégia definida, criamos um design visual que não só impressiona, mas também guia o usuário. Prototipamos as telas para que você possa ver e sentir como seu site vai funcionar antes mesmo do desenvolvimento começar."
    },
    {
        step: 3,
        title: "Desenvolvimento e Otimização",
        description: "É hora de dar vida ao design. Usamos as tecnologias mais modernas para construir um site rápido, seguro e otimizado para todos os dispositivos. Cada detalhe é implementado com precisão para garantir a melhor performance."
    },
    {
        step: 4,
        title: "Lançamento e Suporte",
        description: "Após testes rigorosos, seu site está pronto para o mundo. Cuidamos de todo o processo de lançamento e oferecemos suporte contínuo para garantir que tudo funcione perfeitamente, permitindo que você foque no que faz de melhor: seu negócio."
    }
]

export default function Workflow() {
    return (
        <section id="contatos" className="container relative flex flex-col items-center justify-center py-16 lg:py-24 mb-16 lg:mb-24 overflow-hidden">
            <h2 className="lg:text-7xl text-4xl text-center font-semibold font-headline text-white pb-8 lg:pb-16">
                Fluxo de trabalho da <span className="text-primary">Nexora</span>
            </h2>
            <div className="flex gap-3 justify-center items-center mb-4">
                <p className="text-base text-muted-foreground font-semibold">Arraste para o lado</p>
                <ArrowRight className="w-4 h-4" />
            </div>

            <Carousel className="w-full max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {workflowSteps.map((step) => (
                        <CarouselItem key={step.step}>
                            <div className="p-1">
                                <Card className="bg-card/80 rounded-2xl border-b-4 border-primary animate-borderGlow text-left h-full">
                                    <CardContent className="flex flex-col lg:flex-row justify-center items-start lg:items-center p-8 lg:p-12 gap-8 lg:gap-16">
                                        <div className="text-7xl lg:text-[10rem] font-regular text-white/80 font-headline">{step.step}</div>
                                        <div>
                                            <h3 className="text-2xl font-semibold text-white mb-5">{step.title}</h3>
                                            <p className="text-gray-400 text-base lg:text-lg leading-relaxed">{step.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:flex" />
                <CarouselNext className="hidden lg:flex" />
            </Carousel>
        </section>
    );
}
