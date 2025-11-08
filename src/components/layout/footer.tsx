export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 py-7 px-8 flex flex-col items-center justify-center gap-5 text-sm text-gray-400">
            <p>© 2025 Nexora. Todos os direitos reservados.</p>
            <div className="flex gap-6">
                <a href="https://www.instagram.com/nexora.ag/" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.facebook.com/profile.php?id=61581107199846" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://wa.me/5562991210362?text=Olá, gostaria de saber mais sobre o seu serviço de criação de sites." target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
            </div>
        </footer>
    );
}
