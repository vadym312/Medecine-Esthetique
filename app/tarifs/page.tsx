'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion';
import { Euro, Send } from 'lucide-react';
import { fadeIn } from '@/src/utils/animations';
import { PriceTable } from '@/src/components/tarifs/PriceTable';
import { tarifsData } from '@/src/lib/mockData/tarifs';

const TarifsPage: React.FC = () => {

    const pathname = usePathname();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>

            <div className="min-h-screen bg-gray-50 pt-20">
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <Euro className="w-12 h-12 text-gold mx-auto mb-4" />
                            <h1 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
                                {tarifsData.hero.title}
                            </h1>
                            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
                        </div>

                        {/* Visage Section */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-montserrat font-light text-gray-900 mb-8 text-center">
                                {tarifsData.visage.title}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <PriceTable
                                    title="Injections d'acide hyaluronique"
                                    items={tarifsData.visage.acidHyaluronique}
                                />
                                <PriceTable
                                    title="Toxine botulique"
                                    items={tarifsData.visage.toxineBotulique}
                                />
                                <PriceTable
                                    title="HIFU"
                                    items={tarifsData.visage.hifu}
                                />
                                <PriceTable
                                    title="Radiofréquence"
                                    items={tarifsData.visage.radiofrequence}
                                />
                            </div>
                        </div>

                        {/* Silhouette Section */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-montserrat font-light text-gray-900 mb-8 text-center">
                                {tarifsData.silhouette.title}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <PriceTable
                                    title="Cryolipolyse"
                                    items={tarifsData.silhouette.cryolipolyse}
                                />
                                <PriceTable
                                    title="HIFEM (type EMSculpt)"
                                    items={tarifsData.silhouette.hifem}
                                />
                                <PriceTable
                                    title="Radiofréquence"
                                    items={tarifsData.silhouette.radiofrequence}
                                />
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <p className="text-sm text-gray-500">
                                {tarifsData.disclaimer.text}
                            </p>
                        </div>

                        {/* Épilation Laser Section */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-montserrat font-light text-gray-900 mb-8 text-center">
                                {tarifsData.epilationLaser.title}
                            </h2>

                            {/* Épilation Laser Homme */}
                            <div className="mb-12">
                                <h3 className="text-xl font-montserrat font-medium text-gray-800 mb-6 text-center">
                                    {tarifsData.epilationLaser.homme.title}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <PriceTable
                                        title="Visage"
                                        items={tarifsData.epilationLaser.homme.visage}
                                    />
                                    <PriceTable
                                        title="Corps"
                                        items={tarifsData.epilationLaser.homme.corps}
                                    />
                                    <PriceTable
                                        title="Bras"
                                        items={tarifsData.epilationLaser.homme.bras}
                                    />
                                    <PriceTable
                                        title="Jambes"
                                        items={tarifsData.epilationLaser.homme.jambes}
                                    />
                                </div>
                            </div>

                            {/* Épilation Laser Femme */}
                            <div className="mb-12">
                                <h3 className="text-xl font-montserrat font-medium text-gray-800 mb-6 text-center">
                                    {tarifsData.epilationLaser.femme.title}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <PriceTable
                                        title="Visage"
                                        items={tarifsData.epilationLaser.femme.visage}
                                    />
                                    <PriceTable
                                        title="Corps"
                                        items={tarifsData.epilationLaser.femme.corps}
                                    />
                                    <PriceTable
                                        title="Bras"
                                        items={tarifsData.epilationLaser.femme.bras}
                                    />
                                    <PriceTable
                                        title="Jambes"
                                        items={tarifsData.epilationLaser.femme.jambes}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Microneedling Section */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-montserrat font-light text-gray-900 mb-8 text-center">
                                {tarifsData.microneedling.title}
                            </h2>
                            <div className="flex justify-center">
                                <div className="w-full max-w-md">
                                    <PriceTable
                                        title="Tarifs Microneedling"
                                        items={tarifsData.microneedling.tarifs}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <motion.div
                            className="mt-20 max-w-2xl mx-auto"
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            <div className="text-center mb-12">
                                <Send className="w-12 h-12 text-gold mx-auto mb-4" />
                                <h2 className="text-2xl font-montserrat font-light text-gray-900 mb-4">
                                    {tarifsData.contact.title}
                                </h2>
                                <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
                                <p className="text-gray-600">
                                    {tarifsData.contact.subtitle}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Votre nom
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-colors"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Votre email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-colors"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Votre message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-colors resize-none"
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                    />
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gold hover:bg-gold-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-colors"
                                    >
                                        <Send className="w-5 h-5 mr-2" />
                                        Envoyer
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default TarifsPage;