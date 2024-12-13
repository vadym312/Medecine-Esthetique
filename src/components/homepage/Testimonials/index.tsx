import { useState } from "react";
import { Container } from "../../ui/Container";
import { TestimonialCard } from "./Card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/src/lib/mockData/homepage/testimonials";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const totalTestimonials = testimonials.data.length;
  const totalPages = Math.ceil(totalTestimonials / itemsPerPage);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">{testimonials.title}</h2>
          <p className="text-primary-dark max-w-2xl mx-auto">
            {testimonials.description}
          </p>
        </div>
        <div className="relative flex items-center gap-8">
          <button
            onClick={prev}
            className="w-10 h-10 p-2 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="relative flex items-center object-cover inset-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {testimonials.data
                  .slice(
                    currentIndex * itemsPerPage,
                    (currentIndex + 1) * itemsPerPage
                  )
                  .map((testimonial, index) => (
                    <TestimonialCard
                      key={index}
                      testimonial={testimonial}
                      index={index + 1}
                    />
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={next}
            className="w-10 h-10 p-2 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? "bg-gold-dark" : "bg-gold-light"}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
