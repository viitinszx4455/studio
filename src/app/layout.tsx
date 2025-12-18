import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'CREATIVESCALE',
  description: 'Sites profissionais feitos para destacar seu negócio e gerar resultados reais',
  icons: {
    icon: [
      { url: 'https://i.imgur.com/cMvRDHU.png' },
      { url: 'https://i.imgur.com/cMvRDHU.png', sizes: '16x16', type: 'image/png' },
      { url: 'https://i.imgur.com/cMvRDHU.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: 'https://i.imgur.com/cMvRDHU.png' },
    ],
    shortcut: 'https://i.imgur.com/cMvRDHU.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
