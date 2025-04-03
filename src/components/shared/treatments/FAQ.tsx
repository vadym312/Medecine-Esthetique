'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { SchemaOrg } from '@/src/components/shared/SchemaOrg';

interface FAQItem {
  question: string;
  answer: string[];
}

interface FAQProps {
  title: string;
  subtitle?: string;
  items: FAQItem[];
}

export const TreatmentFAQ: React.FC<FAQProps> = ({ title, subtitle, items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Localize FAQ items if they don't already mention Paris
  const localizedItems = items.map(item => {
    // Check if question already mentions Paris
    const questionHasParis = item.question.toLowerCase().includes('paris');
    
    // Check if answer already mentions Paris
    const answerHasParis = item.answer.some(a => 
      a.toLowerCase().includes('paris')
    );
    
    // If neither question nor answer mentions Paris, add it to the first answer
    if (!questionHasParis && !answerHasParis && item.answer.length > 0) {
      const newAnswer = [...item.answer];
      newAnswer[0] = `${newAnswer[0]} À Paris 12, le Dr Emmanuel Elard propose ce traitement dans son cabinet situé près de Bastille.`;
      return {
        ...item,
        answer: newAnswer
      };
    }
    
    return item;
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title} à Paris</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          {localizedItems.map((faq, index) => (
            <div
              key={index}
              className={`
                border-b border-gray-200 last:border-none
                transition-colors duration-300
                ${openIndex === index ? 'bg-gray-50' : 'hover:bg-gray-50'}
              `}
            >
              <button
                className="w-full py-6 px-6 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span
                  className={`text-lg font-medium transition-colors duration-300 ${openIndex === index ? 'text-gray-900' : 'text-gray-700'
                    }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-all duration-300 ease-in-out ${openIndex === index ? 'rotate-180 text-gray-900' : 'text-gray-400'
                    }`}
                />
              </button>
              <div
                className={`
                  grid transition-all duration-300 ease-in-out
                  ${openIndex === index
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                  }
                `}
              >
                <div className="overflow-hidden">
                  {faq.answer.map((answer, index) =>
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed" key={index}>
                      {answer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add structured data for FAQs */}
      <SchemaOrg type="FAQ" faqs={localizedItems} />
    </section>
  );
};