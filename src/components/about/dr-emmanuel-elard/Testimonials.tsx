import React from 'react';
import { MessageCircle, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Marie L.',
      text: 'Une expertise remarquable et des résultats naturels. Le Dr Elard a su parfaitement comprendre mes attentes et y répondre avec professionnalisme.',
      rating: 5,
      treatment: "Injections d'acide hyaluronique",
    },
    {
      name: 'Sophie D.',
      text: "Je suis suivie par le Dr Elard depuis plusieurs années. Sa maîtrise des techniques d'injection et son approche personnalisée font toute la différence.",
      rating: 5,
      treatment: 'Médecine anti-âge',
    },
    {
      name: 'Catherine M.',
      text: "Un médecin à l'écoute qui prend le temps d'expliquer les traitements. Les résultats sont subtils et naturels, exactement ce que je recherchais.",
      rating: 5,
      treatment: 'Rajeunissement du visage',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MessageCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
          <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
            AVIS DE NOS PATIENTS
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#D4AF37] fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-gray-600 text-center mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              <div className="text-center">
                <p className="font-montserrat font-medium text-gray-900 mb-2">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#D4AF37]">
                  {testimonial.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
