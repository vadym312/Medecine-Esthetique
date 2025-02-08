import { motion } from "framer-motion";
import { Service } from "@/src/types";
import Image from "next/image";
interface ServiceCardProps {
  service: Service;
  index: number;
}

const customLoader = ({ src, width }: { src: string; width: number }) => {
  const maxWidth = width <= 480 ? 393 : 384;
  const quality = 50;
  return `${src}?w=${maxWidth}&q=${quality}&auto=format,compress`;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-xl overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        {service.imageUrl ? (
          <Image
            loader={customLoader}
            src={service.imageUrl}
            alt="Hero background"
            quality={50}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 384px"
            className="absolute inset-0 w-full h-full"
          />
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-primary-dark">{service.description}</p>
      </div>
    </motion.div>
  );
};
