import { motion } from 'framer-motion';
import { Service } from '@/src/types';
interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-xl overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-primary-dark">{service.description}</p>
      </div>
    </motion.div>
  );
};
