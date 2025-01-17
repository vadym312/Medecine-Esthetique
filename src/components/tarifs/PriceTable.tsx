import React from 'react';
import { motion } from 'framer-motion';

interface PriceItem {
  name: string;
  price: string;
}

interface PriceTableProps {
  title: string;
  items: PriceItem[];
}

export const PriceTable: React.FC<PriceTableProps> = ({ title, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="bg-gold px-6 py-4">
        <h3 className="text-xl font-montserrat font-medium text-white">
          {title}
        </h3>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="text-gray-700">{item.name}</span>
              <span className="font-medium text-gold">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};