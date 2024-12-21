import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from '@/src/types/blog';
import Link from 'next/link';

interface ArticleCardProps {
  article: BlogPost;
  index: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <time className="text-sm text-primary-light">{article.createdAt}</time>
        <h3 className="text-xl font-semibold mt-2 mb-3">{article.title}</h3>
        <p className="text-primary-dark mb-4">{article.excerpt}</p>

        <Link href={`/blog/${article.id}`}>
          <button className="inline-flex items-center text-gold hover:text-gold/80 transition-colors">
            Lire la suite
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
    </motion.article>
  );
};