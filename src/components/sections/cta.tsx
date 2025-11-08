import { Button } from "@/components/ui/button"
import { Sparkles, MessageSquare, Wrench, Star } from "lucide-react"

export default function Cta() {
    return (
        <section className="container w-full flex justify-center items-center py-16 lg:py-24">
            <div className="relative w-full text-center rounded-2xl p-1 bg-gray-deep/45 border-b-4 border-gray-light/30 shadow-2xl">
                <div className="rounded-2xl py-12 lg:py-20 flex flex-col items-center justify-center gap-8">
                    <h2 className="text-white font-headline lg:text-7xl text-4xl font-semibold leading-tight">
                        Seu próximo site começa aqui
                        <br className="hidden sm:block" /> moderno, rápido e com sua cara.
                    </h2>
                    <p className="text-gray-medium max-w-xl mx-auto text-lg">
                        Você foca no seu negócio, nós cuidamos de tudo.
                    </p>
                    <div className="text-gray-medium hidden lg:flex flex-wrap justify-center gap-x-8 gap-y-2 text-base">
                        <p className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-gray-light"/> Entrega rápida</p>
                        <p className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-gray-light"/> Suporte direto no WhatsApp</p>
                        <p className="flex items-center gap-2"><Wrench className="w-4 h-4 text-gray-light"/> Design 100% personalizado</p>
                        <p className="flex items-center gap-2"><Star className="w-4 h-4 text-gray-light"/> Clientes satisfeitos em todo o Brasil</p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </section>
    )
}
