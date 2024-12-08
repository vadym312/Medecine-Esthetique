export interface WhatsAppConfig {
  phoneNumber: string;
  message: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  customIcon?: string;
  theme?: 'light' | 'dark';
}

export interface WhatsAppButtonProps extends WhatsAppConfig {
  className?: string;
}