export function formatPhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\D/g, '');
}

export function createWhatsAppLink(phoneNumber: string, message: string): string {
  return `https://wa.me/${formatPhoneNumber(phoneNumber)}?text=${encodeURIComponent(message)}`;
}