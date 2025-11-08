import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "Criação de Sites",
        description: "Sites únicos, rápidos e responsivos criados para gerar confiança e resultados reais.",
        isFeatured: false,
    },
    {
        title: "Landing Pages de Alta Conversão",
        description: "Páginas otimizadas com foco total em vendas e geração de leads.",
        isFeatured: true,
    },
    {
        title: "Design Estratégico",
        description: "Layouts modernos, pensados com propósito: vender mais e fortalecer sua marca.",
        isFeatured: false,
    }
];

export default function Services() {
    return (
        <section id="quem-somos" className="container relative w-full py-16 lg:py-24">
            <div className="lg:flex items-center justify-between gap-10 lg:mb-12 mb-7">
                <h2 className="text-white text-center lg:text-left font-semibold font-headline lg:text-7xl text-4xl mb-4 leading-tight">
                    Serviços que elevam sua <br /> presença digital
                </h2>
                <div className="hidden lg:block w-[18rem] h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <Card key={index} className={
                        service.isFeatured 
                        ? "bg-gradient-to-br from-primary via-[#290E58] to-[#210B47] border-0 shadow-[0_0_30px_rgba(83,28,179,0.3)] transition-transform duration-500 ease-out hover:scale-105"
                        : "bg-[#0E1017] border border-transparent hover:border-border/50 transition-all duration-500 shadow-lg hover:scale-105"
                    }>
                        <CardHeader>
                            <div className="flex items-center gap-4 mb-2">
                                <div className={`w-7 h-7 rounded-full ${service.isFeatured ? 'bg-white' : 'bg-primary'}`}></div>
                                <CardTitle className="text-white text-2xl font-semibold">{service.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className={`${service.isFeatured ? "text-white/90" : "text-gray-400"} text-lg leading-relaxed`}>{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center mt-12">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-[#290E58] bg-[length:200%_100%] bg-right hover:bg-left transition-all duration-500 text-white font-semibold rounded-full px-8 py-6 text-base animate-ultraSlowBlueGradient shadow-lg hover:shadow-primary/50">
                    <a href="https://wa.me/5562991210362?text=Olá, gostaria de saber mais sobre o seu serviço de criação de sites." target="_blank" rel="noopener noreferrer">Quero meu projeto personalizado</a>
                </Button>
            </div>
        </section>
    );
}
