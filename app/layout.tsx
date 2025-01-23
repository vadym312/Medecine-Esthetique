import './globals.css';
import { Montserrat } from 'next/font/google';
import { RootLayout } from '@/src/components/layout/RootLayout';
import { defaultMetadata } from '@/src/lib/seo/metadata';
import { WhatsAppProvider } from '@/src/components/layout/WhatsApp/Provider';
import { WhatsAppWrapper } from '@/src/components/layout/WhatsApp/Wrapper';

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
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      </head>
      <body className={montserrat.className}>
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