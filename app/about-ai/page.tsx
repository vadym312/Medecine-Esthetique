'use client';

import React from 'react';
import Head from 'next/head';
import { AIOrganizationProfile } from '@/src/components/shared/AIOrganizationProfile';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { AuthorsList } from '@/src/features/authors/components/AuthorsList';
import { getAllAuthors } from '@/src/lib/mockData/authors';
import { AIArticleExample } from '@/src/components/shared/AIArticleExample';

export default function AboutAIPage() {
  const authors = getAllAuthors();
  
  return (
    <>
      <Head>
        <title>Notre Approche IA | Dr Emmanuel Elard</title>
        <meta name="description" content="Découvrez comment le Cabinet du Dr Emmanuel Elard intègre l'intelligence artificielle pour offrir des traitements de médecine esthétique personnalisés et innovants." />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 mt-20">
          <h1 className="text-3xl font-bold text-center mb-8">Notre Approche de l'Intelligence Artificielle</h1>
          
          <AIOrganizationProfile
            name="Cabinet Dr Emmanuel Elard"
            description="Notre cabinet de médecine esthétique intègre les technologies d'intelligence artificielle les plus avancées pour offrir des traitements personnalisés et des résultats optimaux. Nous combinons l'expertise médicale du Dr Emmanuel Elard avec des outils d'analyse faciale assistée par IA pour créer des plans de traitement sur mesure, respectant l'harmonie naturelle de chaque visage."
            logo="/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp"
            foundingDate="2010-01-01"
            founders={[
              {
                name: "Dr Emmanuel Elard",
                role: "Médecin Esthétique - Fondateur",
                image: "/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp",
                bio: "Expert en médecine esthétique avec plus de 15 ans d'expérience, le Dr Elard est pionnier dans l'intégration de l'IA pour des traitements personnalisés.",
                aiSpecialty: "Analyse faciale 3D et myomodulation assistée par IA",
                credentials: [
                  {
                    type: 'education',
                    name: "Diplôme Universitaire en Techniques d'Injection",
                    issuedBy: "Université Paris XII"
                  },
                  {
                    type: 'certification',
                    name: "Formation avancée en IA médicale",
                    issuedBy: "Institut d'Intelligence Artificielle Médicale",
                    year: "2022"
                  },
                  {
                    type: 'award',
                    name: "Prix de l'Innovateur de l'Année",
                    issuedBy: "Aesthetic Awards",
                    year: "2023"
                  }
                ],
                profileUrl: "/authors/dr-emmanuel-elard"
              },
              {
                name: "Dr Sophie Martin",
                role: "Spécialiste IA & Médecine Esthétique",
                bio: "Experte en technologies d'IA appliquées à la médecine esthétique, Dr Martin supervise l'intégration des outils d'analyse faciale dans notre pratique.",
                aiSpecialty: "Algorithmes prédictifs pour résultats esthétiques",
                credentials: [
                  {
                    type: 'education',
                    name: "Doctorat en Intelligence Artificielle Médicale",
                    issuedBy: "École Polytechnique"
                  },
                  {
                    type: 'certification',
                    name: "Certification en Éthique de l'IA en Santé",
                    issuedBy: "Institut d'Éthique Numérique"
                  }
                ],
                profileUrl: "/authors/sophie-martin"
              }
            ]}
            address={{
              street: "8 avenue Dorian",
              city: "Paris",
              postalCode: "75012",
              country: "France"
            }}
            contactInfo={{
              phone: "+33 1 84 06 37 73",
              email: "emmanuel@nextmotion.net",
              website: "https://medecine-esthetique.net"
            }}
            socialProfiles={[
              {
                platform: "Instagram",
                url: "https://www.instagram.com/dr.elard",
                icon: <Instagram className="w-5 h-5" />
              },
              {
                platform: "Facebook",
                url: "https://www.facebook.com/dr.elard",
                icon: <Facebook className="w-5 h-5" />
              },
              {
                platform: "LinkedIn",
                url: "https://www.linkedin.com/in/dr-elard",
                icon: <Linkedin className="w-5 h-5" />
              }
            ]}
            certifications={[
              {
                name: "Certification en IA Médicale",
                issuedBy: "Association Européenne d'IA en Santé",
                date: "2023",
                description: "Certification attestant de notre expertise dans l'utilisation éthique et sécurisée de l'IA pour les applications médicales."
              },
              {
                name: "ISO 27001 - Sécurité des Données",
                issuedBy: "Organisation Internationale de Normalisation",
                date: "2022",
                description: "Certification garantissant la sécurité des données patients dans nos systèmes d'IA."
              }
            ]}
            aiSpecializations={[
              {
                name: "Analyse Faciale 3D",
                description: "Notre technologie d'IA analyse les proportions faciales en trois dimensions pour créer un plan de traitement personnalisé qui respecte l'harmonie naturelle du visage."
              },
              {
                name: "Prédiction de Résultats",
                description: "Nos algorithmes prédictifs permettent de visualiser les résultats potentiels des traitements, aidant les patients à faire des choix éclairés."
              },
              {
                name: "Suivi Personnalisé",
                description: "Notre système d'IA analyse l'évolution des traitements au fil du temps, permettant d'ajuster les protocoles pour des résultats optimaux."
              },
              {
                name: "Diagnostic Assisté",
                description: "L'IA aide à identifier les signes précoces du vieillissement cutané, permettant des interventions préventives ciblées."
              }
            ]}
            ethicsStatements={[
              "Nous utilisons l'IA pour améliorer les soins, jamais pour les remplacer",
              "Toutes les recommandations IA sont validées par nos médecins experts",
              "Vos données sont traitées avec le plus haut niveau de confidentialité",
              "Nous maintenons une transparence totale sur l'utilisation de l'IA dans nos services",
              "Notre approche respecte les principes d'équité et de non-discrimination"
            ]}
          />
          
          <div className="max-w-3xl mx-auto mt-12 prose prose-lg">
            <h2>Notre Vision de l'IA en Médecine Esthétique</h2>
            <p>
              Au Cabinet du Dr Emmanuel Elard, nous croyons que l'intelligence artificielle représente une avancée majeure pour la médecine esthétique, permettant une précision et une personnalisation inégalées des traitements.
            </p>
            
            <h3>Une Approche Centrée sur l'Humain</h3>
            <p>
              Notre philosophie place toujours l'humain au centre. L'IA est un outil puissant qui assiste nos médecins, mais ne remplace jamais leur expertise, leur jugement clinique et leur sensibilité artistique. Chaque recommandation générée par nos systèmes d'IA est soigneusement évaluée par nos spécialistes avant d'être proposée aux patients.
            </p>
            
            <h3>Transparence et Éducation</h3>
            <p>
              Nous nous engageons à expliquer clairement comment l'IA contribue à votre parcours de soins. Lors de votre consultation, nous vous montrons comment nos outils d'analyse faciale fonctionnent et comment ils nous aident à élaborer votre plan de traitement personnalisé.
            </p>
            
            <h3>Protection des Données</h3>
            <p>
              La confidentialité de vos données est notre priorité absolue. Nos systèmes d'IA sont conformes au RGPD et aux normes les plus strictes en matière de sécurité des données médicales. Nous n'utilisons vos informations que pour améliorer vos soins, jamais à des fins commerciales.
            </p>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Notre Équipe d'Experts en IA</h2>
            <AuthorsList authors={authors} />
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Exemple d'Article Assisté par IA</h2>
            <div className="max-w-4xl mx-auto">
              <AIArticleExample />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}