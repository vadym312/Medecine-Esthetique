import './globals.css';
import { Montserrat } from 'next/font/google';
import { RootLayout } from '@/src/components/layout/RootLayout';
import { defaultMetadata } from '@/src/lib/seo/metadata';
import { WhatsAppProvider } from '@/src/components/layout/WhatsApp/Provider';
import { WhatsAppWrapper } from '@/src/components/layout/WhatsApp/Wrapper';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata = defaultMetadata;

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
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