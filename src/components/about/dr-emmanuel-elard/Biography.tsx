import React from 'react';

interface BiographyProps {
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
}
export const Biography: React.FC<BiographyProps> = (props) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <img
              src={props.image.src}
              alt={props.image.alt}
              className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
          </div>
          <div>
            <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-6">
              {props.title}
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mb-8"></div>
            {props.paragraphs.map((paragraph: string, index: number) => (
              <p className="text-gray-600 mb-6" key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
