import { motion } from 'framer-motion';

export interface RelatedProcedure {
  title: string;
  path: string;
  description: string;
  imageUrl: string;
}

interface RelatedProceduresProps {
  procedures: RelatedProcedure[];
}

export const RelatedProcedures = ({ procedures }: RelatedProceduresProps) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
          Procédures associées
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <motion.div
              key={procedure.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={procedure.imageUrl}
                alt={procedure.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  {procedure.title}
                </h3>
                <p className="text-gray-600 mb-4">{procedure.description}</p>
                <a
                  href={procedure.path}
                  className="text-[#D4AF37] hover:text-[#B69121] font-semibold transition-colors"
                >
                  En savoir plus →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
