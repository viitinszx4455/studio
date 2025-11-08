import { Button } from "@/components/ui/button"
import { Sparkles, MessageSquare, Wrench, Star } from "lucide-react"

export default function Cta() {
    return (
        <section className="container w-full flex justify-center items-center py-16 lg:py-24">
            <div className="relative w-full text-center rounded-2xl p-1 bg-[#13161F]/45 border-b-4 border-primary shadow-2xl">
                <div className="rounded-2xl py-12 lg:py-20 flex flex-col items-center justify-center gap-8">
                    <h2 className="text-white font-headline lg:text-7xl text-4xl font-semibold leading-tight">
                        Seu próximo site começa aqui
                        <br className="hidden sm:block" /> moderno, rápido e com sua cara.
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Você foca no seu negócio, nós cuidamos de tudo.
                    </p>
                    <div className="text-gray-400 hidden lg:flex flex-wrap justify-center gap-x-8 gap-y-2 text-base">
                        <p className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary"/> Entrega rápida</p>
                        <p className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-primary"/> Suporte direto no WhatsApp</p>
                        <p className="flex items-center gap-2"><Wrench className="w-4 h-4 text-primary"/> Design 100% personalizado</p>
                        <p className="flex items-center gap-2"><Star className="w-4 h-4 text-primary"/> Clientes satisfeitos em todo o Brasil</p>
                    </div>
                    <div>
                        <Button asChild size="lg" className="w-full lg:w-auto bg-gradient-to-r from-primary to-[#290E58] bg-[length:200%_100%] bg-right hover:bg-left transition-all duration-500 text-white font-semibold rounded-full px-8 py-6 text-base animate-ultraSlowBlueGradient shadow-lg hover:shadow-primary/50">
                            <a href="https://wa.me/5562991210362?text=Olá! Quero criar meu site personalizado." target="_blank" rel="noopener noreferrer">
                                Falar com a Nexora
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
