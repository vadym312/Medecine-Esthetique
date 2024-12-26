import './globals.css';
import { Montserrat } from 'next/font/google';
import { RootLayout } from '@/src/components/layout/RootLayout';
import { defaultMetadata } from '@/src/lib/seo/metadata';
import { WhatsAppProvider } from '@/src/components/layout/WhatsApp/Provider';
import { WhatsAppWrapper } from '@/src/components/layout/WhatsApp/Wrapper';
import Script from 'next/script';

// Optimize font loading
const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-montserrat',
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata = defaultMetadata;

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <link rel="icon" href="/favicon.png" sizes="32x32"></link>
      <body className={montserrat.className}>
        <RootLayout>
          <WhatsAppProvider>
            {children}
            <WhatsAppWrapper />
          </WhatsAppProvider>
        </RootLayout>
        <Script
          src="https://www.googletagmanager.com/gtag/js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}