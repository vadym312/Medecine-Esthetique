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
      <div className="aspect-[16/9] overflow-hidden relative">
        {service.imageUrl ? (
          <Image
            loader={customLoader}
            src={service.imageUrl}
            alt="Hero background"
            quality={50}
            width={393} // Mobile width
            height={221} // Based on 16:9 ratio
            sizes="(max-width: 480px) 393px, 384px"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
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
