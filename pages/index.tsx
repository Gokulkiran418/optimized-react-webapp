import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Hero from '@/components/Hero';
import CategoryCard from '@/components/CategoryCard';
import BackgroundShapes from '@/components/BackgroundShapes';
import { Category } from '@/types/category';

type HomePageProps = {
  categories: Category[];
};

export default function HomePage({ categories }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Artistly – Book Artists Easily</title>
        <meta name="description" content="Explore and book top-performing artists on Artistly." />
      </Head>
      <section className="relative overflow-hidden space-y-10">
        <BackgroundShapes />
        <Hero />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} title={cat.title} image={cat.image} />
          ))}
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const filePath = path.join(process.cwd(), 'public', 'data', 'categories.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const categories: Category[] = JSON.parse(fileContents);

  return {
    props: {
      categories,
    },
  };
};