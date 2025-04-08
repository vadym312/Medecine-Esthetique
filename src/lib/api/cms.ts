import { BlogPost } from '@/src/types/blog';

// Mock data for fallback when API is unavailable
const mockBlogPosts: BlogPost[] = [
    {
        id: '1',
        title: {
            rendered: "Les Dernières Tendances en Médecine Esthétique"
        },
        excerpt: {
            rendered: "Découvrez les innovations récentes dans le domaine de la médecine esthétique et comment elles peuvent vous aider à atteindre vos objectifs."
        },
        content: {
            rendered: "<p>Contenu de l'article...</p>"
        },
        date: new Date().toISOString(),
        slug: "tendances-medecine-esthetique",
        categories: ["1"],
        category: "Traitements",
        createdAt: new Date().toISOString(),
        _embedded: {
            "wp:featuredmedia": [{
                source_url: "/images/home/IMG_6067.webp"
            }]
        }
    },
    {
        id: '2',
        title: {
            rendered: "Acide Hyaluronique : Tout ce que vous devez savoir"
        },
        excerpt: {
            rendered: "L'acide hyaluronique est l'un des traitements les plus populaires en médecine esthétique. Voici ce que vous devez savoir avant de vous lancer."
        },
        content: {
            rendered: "<p>Contenu de l'article...</p>"
        },
        date: new Date().toISOString(),
        slug: "acide-hyaluronique-guide",
        categories: ["2"],
        category: "Conseils",
        createdAt: new Date().toISOString(),
        _embedded: {
            "wp:featuredmedia": [{
                source_url: "/images/acide-hyaluronique.webp"
            }]
        }
    },
    {
        id: '3',
        title: {
            rendered: "Prendre soin de sa peau en hiver"
        },
        excerpt: {
            rendered: "L'hiver peut être particulièrement difficile pour votre peau. Voici quelques conseils pour la maintenir en bonne santé pendant les mois froids."
        },
        content: {
            rendered: "<p>Contenu de l'article...</p>"
        },
        date: new Date().toISOString(),
        slug: "soins-peau-hiver",
        categories: ["3"],
        category: "Actualités",
        createdAt: new Date().toISOString(),
        _embedded: {
            "wp:featuredmedia": [{
                source_url: "/images/skinbooster-mesolift.webp"
            }]
        }
    }
];

export async function fetchPosts(): Promise<BlogPost[]> {
    try {
        const res = await fetch(`https://blog.medecine-esthetique.net/wp-json/wp/v2/posts?_embed`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            next: {
                revalidate: 60 // Revalidate every minute
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        // Return mock data instead of empty array to ensure UI has content
        return mockBlogPosts;
    }
}

export async function fetchCategories() {
    try {
        const res = await fetch(`https://blog.medecine-esthetique.net/wp-json/wp/v2/categories`, {
            headers: {
                'Accept': 'application/json',
            },
            next: {
                revalidate: 3600 // Revalidate every hour for categories
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        // Return mock categories
        return [
            { id: "1", name: "Traitements", slug: "traitements" },
            { id: "2", name: "Conseils", slug: "conseils" },
            { id: "3", name: "Actualités", slug: "actualites" }
        ];
    }
}

export async function fetchPostBySlug(slug: string | string[]) {
    try {
        const res = await fetch(
            `https://blog.medecine-esthetique.net/wp-json/wp/v2/posts?slug=${slug}&_embed`,
            {
                cache: "no-store",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const posts = await res.json();

        return posts.length > 0
            ? {
                ...posts[0],
                featuredImage: posts[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
            }
            : null;
    } catch (error) {
        console.error('Error fetching post by slug:', error);
        // Return null for individual post - will be handled by the UI
        return null;
    }
}