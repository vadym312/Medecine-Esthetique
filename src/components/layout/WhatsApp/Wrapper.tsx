'use client';

import { useWhatsApp } from './Provider';
import WhatsAppButton from './Button';

export const WhatsAppWrapper: React.FC = () => {
  const config = useWhatsApp();
  
  if (!config) return null;
  
  return <WhatsAppButton {...config} />;
};