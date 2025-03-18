"use client";

import { useState } from 'react';
import { clsx } from 'clsx';
import { WhatsAppButtonProps } from '@/src/types/whatsapp';
import { createWhatsAppLink } from '@/src/lib/utils/whatsapp';
import WhatsAppHoverMessage from './Message';
import WhatsAppIcon from './Icon';

export const POSITION_CLASSES = {
  'bottom-right': 'bottom-16 right-12',
  'bottom-left': 'bottom-16 left-12',
  'top-right': 'top-12 right-12',
  'top-left': 'top-12 left-12',
}

export default function WhatsAppButton({
  phoneNumber,
  message,
  position = 'bottom-right',
  theme = 'light',
  className,
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappLink = createWhatsAppLink(phoneNumber, message);

  return (
    <div
      className={clsx(
        'fixed z-50 flex items-center',
        POSITION_CLASSES[position],
        className
      )}
    >
      {isHovered && <WhatsAppHoverMessage theme={theme} />}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Contactez-nous via WhatsApp"
      >
        <WhatsAppIcon theme={theme} />
      </a>
    </div>
  );
}