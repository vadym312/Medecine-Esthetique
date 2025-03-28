import { motion } from "framer-motion";
import { Award, GraduationCap, Users } from "lucide-react";
import { Container } from "../ui/Container";
import { doctor } from "@/src/lib/mockData/homepage/doctor";
import Image from "next/image";
const icons = {
  award: Award,
  graduationCap: GraduationCap,
  users: Users,
};

const customLoader = ({ src, width }: { src: string; width: number }) => {
  const quality = width <= 480 ? 75 : 85; // Higher quality for mobile LCP

  return `${src}?w=${width}&q=${quality}&auto=format,compress`;
};

export const DoctorBanner: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-light tracking-wide"
          >
            {doctor.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-dark mt-2"
          >
            {doctor.title}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              width={384}
              height={512}
              loader={customLoader}
              src={doctor.image.url}
              alt={doctor.image.alt}
              className="rounded-lg shadow-xl w-96"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">{doctor.name}</h2>
            <p className="text-primary-dark">{doctor.description}</p>

            <div className="space-y-4">
              {doctor.qualifications.map((qualification: any) => {
                const Icon = icons[qualification.icon as keyof typeof icons];
                return (
                  <div
                    key={qualification.id}
                    className="flex items-center gap-4"
                  >
                    <Icon className="w-8 h-8 text-gold" />
                    <div>
                      <h3 className="font-semibold">{qualification.title}</h3>
                      <p className="text-primary-light">
                        {qualification.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
