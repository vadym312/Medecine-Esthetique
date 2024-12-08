import { MessageCircle } from 'lucide-react';
import { clsx } from 'clsx';

interface WhatsAppIconProps {
  theme: 'light' | 'dark';
  className?: string;
}

export default function WhatsAppIcon({ theme, className }: WhatsAppIconProps) {
  return (
    <div
      className={clsx(
        'flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110',
        theme === 'light'
          ? 'bg-green-500 text-white hover:bg-green-600'
          : 'bg-green-600 text-white hover:bg-green-700',
        className
      )}
    >
      <MessageCircle className="h-6 w-6" />
    </div>
  );
}