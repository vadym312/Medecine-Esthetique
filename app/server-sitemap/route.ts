import { NextResponse } from 'next/server';

// Define the structure of a WordPress post response
interface WordPressPost {
    slug: string;
    modified: string;
}

// Function to fetch blog slugs from WordPress with error handling
async function fetchBlogSlugs(): Promise<{ loc: string; lastmod: string }[]> {
    try {
        const res = await fetch('https://blog.medecine-esthetique.net/wp-json/wp/v2/posts?per_page=100'); // Adjust per_page as needed

        // Check for errors in the fetch request
        if (!res.ok) {
            throw new Error(`Failed to fetch posts: ${res.statusText}`);
        }

        const posts: WordPressPost[] = await res.json();

        return posts.map((post) => ({
            loc: `https://medecine-esthetique.net/blog/${post.slug}`, // Construct full URL
            lastmod: new Date(post.modified).toISOString(), // Convert last modified date to ISO format
        }));
    } catch (error) {
        console.error('Error fetching WordPress posts:', error);
        return []; // Return an empty array in case of failure
    }
}

// API route handler for the sitemap
export async function GET() {
    const sitemapFields = await fetchBlogSlugs();

    // If no posts were fetched, return an empty XML response
    if (sitemapFields.length === 0) {
        console.warn('No blog posts found. Sitemap may be empty.');
    }

    // Build XML sitemap
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                    ${sitemapFields
            .map(
                (field) => `
                    <url>
                        <loc>${field.loc}</loc>
                        <lastmod>${field.lastmod}</lastmod>
                    </url>`
            )
            .join('')}
                </urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
