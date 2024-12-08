import { WhatsAppConfig } from '../../types/whatsapp';

export async function fetchWhatsAppConfig(): Promise<WhatsAppConfig> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    phoneNumber: '+33620352428',
    message: 'Bonjour, je souhaite vous contacter.',
    position: 'bottom-right',
    theme: 'light'
  };
}