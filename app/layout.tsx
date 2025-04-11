import "./globals.css";
import { Montserrat } from "next/font/google";
import { RootLayout } from "@/src/components/layout/RootLayout";
import { defaultMetadata } from "@/src/lib/seo/metadata";
import { WhatsAppProvider } from "@/src/components/layout/WhatsApp/Provider";
import { WhatsAppWrapper } from "@/src/components/layout/WhatsApp/Wrapper";
import dynamic from 'next/dynamic';

// Dynamically import GTM with loading optimization
const GoogleTagManager = dynamic(() => import('./gtm'), {
  ssr: false,
  loading: () => null,
});

// Optimize font loading
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-montserrat",
  adjustFontFallback: true,
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  ...defaultMetadata,
  fontOptimization: true,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <link
          rel="preconnect"
          href="https://patient.nextmotion.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link 
          rel="dns-prefetch" 
          href="https://www.googletagmanager.com"
        />
        <GoogleTagManager />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-TJBRS99D`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <RootLayout>
          <WhatsAppProvider>
            {children}
            <WhatsAppWrapper />
          </WhatsAppProvider>
        </RootLayout>
      </body>
    </html>
  );
}