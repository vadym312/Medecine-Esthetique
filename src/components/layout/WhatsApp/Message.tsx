import { clsx } from 'clsx';

interface WhatsAppHoverMessageProps {
  theme: 'light' | 'dark';
}

export default function WhatsAppHoverMessage({ theme }: WhatsAppHoverMessageProps) {
  return (
    <span
      className={clsx(
        'mr-3 rounded-lg px-4 py-2 text-sm font-medium shadow-lg transition-all duration-300',
        theme === 'light'
          ? 'bg-white text-gray-800'
          : 'bg-gray-800 text-white'
      )}
    >
      Démarrer une conversation
    </span>
  );
}