"use client";

import WhatsAppButton from './Button';
import { useWhatsApp } from './Provider';

export const WhatsAppWrapper:React.FC = () => {
  const config = useWhatsApp();
  return <WhatsAppButton {...config} />;
}