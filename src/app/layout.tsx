import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guincho 24h em São Joaquim da Barra | Auto Socorro Rápido",
  description: "Precisa de guincho agora? Atendimento 24h rápido em São Joaquim da Barra. Clique e chame no WhatsApp! Guincho leve, pesado, pane seca e mais.",
  keywords: [
    "guincho 24h",
    "guincho São Joaquim da Barra",
    "auto socorro",
    "guincho urgente",
    "reboque 24 horas",
    "socorro mecânico",
    "pane seca",
    "troca de pneu",
    "guincho perto de mim"
  ],
  authors: [{ name: "São Joaquim Guincho Auto Socorro" }],
  openGraph: {
    title: "Guincho 24h em São Joaquim da Barra | Auto Socorro Rápido",
    description: "Precisa de guincho agora? Atendimento 24h rápido em São Joaquim da Barra. Clique e chame no WhatsApp!",
    type: "website",
    locale: "pt_BR",
    siteName: "São Joaquim Guincho Auto Socorro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guincho 24h em São Joaquim da Barra",
    description: "Atendimento rápido 24h. Clique e chame no WhatsApp!",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://saojoaquimguinchos.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
        
        {/* Google Maps API */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD-9tSrkeKBZ9zP9D8c1h3iFZ5Q6z2y3d0';
                script.async = true;
                script.defer = true;
                document.head.appendChild(script);
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
