import React from 'react';

interface CopyrightProps {
  text?: string;
  subtext?: string;
}

export const Copyright: React.FC<CopyrightProps> = ({
  text = `© ${new Date().getFullYear()} Dr. Emmanuel ELARD. Tous droits réservés.`,
  subtext = 'Médecine Esthétique Paris',
}) => {
  return (
    <div className="text-center">
      <p className="font-light text-xs text-white mb-1">{text}</p>
      {subtext && <p className="text-xs text-white">{subtext}</p>}
    </div>
  );
};
