'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface ImageResult {
    description: string;
    url: string[];
}

interface AvantSectionProps {
    title: string;
    subtitle?: string;
    videoIds?: string[];
    images?: ImageResult;
    description?: string;
}

export const TreatmentAvant: React.FC<AvantSectionProps> = ({
    title,
    subtitle,
    description,
    videoIds = [],
    images,
}) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.h2
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-xl text-gray-600"
                    >
                        {subtitle}
                    </motion.p>
                </div>
                {images && images.description && <div className={`grid md:grid-cols-${images?.url.length} gap-8 max-w-5xl mx-auto`}>
                    {images?.url.map((url, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            className="relative pb-[50%] h-0 rounded-xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={url}
                                alt='result'
                                className="absolute top-0 left-0 w-full h-full"
                            />
                        </motion.div>
                    ))}
                    <p className='text-center text-gray-600'>{images?.description}</p>
                </div>
                }
                <motion.p
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-xl text-gray-600 mb-4"
                >
                    {description}
                </motion.p>
                {videoIds && videoIds.length > 0 &&
                    <div className={`grid md:grid-cols-${videoIds.length + 1} gap-8 max-w-5xl mx-auto`}>
                        {videoIds.map((video, index) => (
                            <div className={`${index !== 0 ? `col-span-2` : ""}`}>
                                <motion.div
                                    key={index}
                                    variants={fadeIn}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    className={`relative pb-[50%] h-full rounded-xl flex justify-center overflow-hidden shadow-lg`}
                                >
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute top-0 left-0 w-full h-full"
                                    />
                                </motion.div>
                            </div>

                        ))}
                    </div>
                }
            </div>
        </section>
    );
};