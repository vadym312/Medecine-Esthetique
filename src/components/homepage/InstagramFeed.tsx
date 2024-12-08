import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { instagramPosts } from '@/src/lib/mockData/homepage/instagramPosts';

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{instagramPosts.title}</h2>
          <p className="text-primary-dark">
            {instagramPosts.description}
            <a
              href="https://instagram.com/dr.elard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              {instagramPosts.instagramId}
            </a>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.data.map((post: any, index: number) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/dr.elard"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.imageUrl}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
};
