import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/src/types/blog";
import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  article: BlogPost;
  index: number;
}

const customLoader = ({ src, width }: { src: string; width: number }) => {
  const maxWidth = width <= 480 ? 393 : 384;
  const quality = 50;
  return `${src}?w=${maxWidth}&q=${quality}&auto=format,compress`;
};

// Function to format the date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
};

// Default fallback image
const FALLBACK_IMAGE = "/images/home/IMG_6067.webp";

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  // Get the featured image URL or use fallback
  const imageUrl = article._embedded?.["wp:featuredmedia"]?.[0]?.source_url || FALLBACK_IMAGE;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
    >
      <div className="aspect-[16/9] overflow-hidden relative">
        <Image
          loader={customLoader}
          src={imageUrl}
          alt={article.title.rendered}
          quality={50}
          width={393} // Mobile width
          height={221} // Based on 16:9 ratio
          sizes="(max-width: 480px) 393px, 384px"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = FALLBACK_IMAGE;
          }}
        />
      </div>

      <div className="p-6">
        <time className="text-sm text-primary-light">{formatDate(article.date)}</time>
        <h3 className="text-xl font-semibold mt-2 mb-3">{article.title.rendered}</h3>
        <p
          className="text-primary-dark mb-4"
          dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }}
        />

        <Link href={`/blog/${article.slug}`}>
          <button className="inline-flex items-center text-gold hover:text-gold/80 transition-colors">
            Lire la suite
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </motion.article>
  );
};