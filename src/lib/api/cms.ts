export async function fetchPosts() {
    const res = await fetch(`https://blog.medecine-esthetique.net/wp-json/wp/v2/posts?_embed`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch posts");

    return res.json();
}

export async function fetchCategories() {
    const res = await fetch(`https://blog.medecine-esthetique.net/wp-json/wp/v2/categories`);
    if (!res.ok) throw new Error("Failed to fetch categories");

    return res.json();
}

export async function fetchPostBySlug(slug: string | string[]) {
    const res = await fetch(`https://blog.medecine-esthetique.net/wp-json/wp/v2/posts?slug=${slug}&_embed`, { cache: "no-store" });
    const posts = await res.json();

    return posts.length > 0
        ? {
            ...posts[0],
            featuredImage: posts[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
        }
        : null;
}

