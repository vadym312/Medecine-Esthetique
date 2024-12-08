import { clsx } from 'clsx';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

export const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
}) => {
  return (
    <div className="flex items-start gap-4">
      <div
        className={clsx(
          'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
          'bg-gold text-white font-semibold'
        )}
      >
        {String(step).padStart(2, '0')}
      </div>
      <div>
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-primary-dark">{description}</p>
      </div>
    </div>
  );
};
