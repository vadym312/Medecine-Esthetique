import React from 'react';

interface ErrorDisplayProps {
  error: Error;
  onRetry: () => void;
}

export const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Une erreur est survenue
        </h2>
        <p className="text-gray-600 mb-6">{error.message}</p>
        <button
          onClick={onRetry}
          className="bg-gold text-white px-6 py-2 rounded-lg hover:bg-gold/90 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
};