'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
  
const faqs = [
    {
      question: "Quanto tempo leva para entregar um site?",
      answer: "O prazo médio é de 2 a 3 dias, dependendo da complexidade e da quantidade de páginas do projeto."
    },
    {
      question: "Vocês fazem sites personalizados ou só modelos prontos?",
      answer: "Trabalhamos 100% com sites personalizados, criados do zero para o seu negócio."
    },
    {
      question: "O site funciona em celular?",
      answer: "Sim! Todos os sites que criamos são responsivos e se adaptam a qualquer tela: celular, tablet e desktop."
    },
    {
      question: "E se eu precisar mudar algo depois?",
      answer: "Sem problemas! Você pode solicitar ajustes ou contratar um plano de manutenção para alterações futuras."
    },
    {
      question: "O site vai aparecer no Google?",
      answer: "Sim, aplicamos práticas básicas de SEO para que seu site tenha melhor desempenho nos buscadores."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento pode ser feito via Pix ou cartão: 50% no início do projeto e os outros 50% após a conclusão."
    },
    {
      question: "E se eu não gostar do design?",
      answer: "Antes da entrega final, você aprova o design e pode pedir ajustes até que fique satisfeito."
    }
]
  
export default function Faq() {
    return (
        <section className="container w-full py-16 lg:py-24 flex flex-col items-center">
            <h2 className="lg:text-7xl text-4xl font-semibold font-headline text-white mb-12 text-center">Perguntas frequentes</h2>
            <Accordion type="single" collapsible className="w-full max-w-4xl space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="bg-gray-deep/50 rounded-xl border border-gray-medium/30">
                        <AccordionTrigger className="w-full flex justify-between items-center text-left p-6 text-white font-medium hover:bg-white/5 transition-colors text-lg hover:no-underline [&>svg]:text-gray-light">
                            <span>{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 text-gray-medium text-base leading-relaxed">
                            <div className="pt-0 pb-4">
                                {faq.answer}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <p className="text-gray-medium text-center mt-16 mb-6 text-lg">
                Ainda está com dúvidas? <br className="hidden lg:block" /> Fale com nosso suporte no WhatsApp e tenha uma resposta agora mesmo.
            </p>
            <Button asChild size="lg" className="bg-gray-deep hover:bg-gray-medium transition-all duration-500 text-white font-semibold rounded-full px-8 py-6 text-base shadow-lg hover:shadow-gray-light/20 border border-gray-medium">
                <a href="https://wa.me/5562991210362?text=Olá, tenho algumas dúvidas sobre o site!" target="_blank" rel="noopener noreferrer">
                    Falar com o suporte
                </a>
            </Button>
        </section>
    )
}
