import { Container } from '../../ui/Container';
import { ArticleCard } from './Card';
import { articles } from '@/src/lib/mockData/homepage/articles';

export const BlogArticles: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          {articles.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.data.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
