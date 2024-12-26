import { toast } from 'react-hot-toast';

export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public statusCode?: number
  ) {
    super(message);
    this.name = 'AppError';
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export const handleError = (error: unknown): void => {
  console.error('Error:', error);
  
  if (error instanceof AppError) {
    toast.error(error.message);
  } else if (error instanceof Error) {
    toast.error('Une erreur est survenue. Veuillez réessayer.');
  } else {
    toast.error('Une erreur inattendue est survenue.');
  }
};

export const isAppError = (error: unknown): error is AppError => {
  return error instanceof AppError;
};

export const createAppError = (message: string, code?: string, statusCode?: number): AppError => {
  return new AppError(message, code, statusCode);
};