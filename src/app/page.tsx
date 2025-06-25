import { Metadata } from 'next'
import Hero from '@/components/Hero'
import CategoryCard from '@/components/CategoryCard'
import categories from '@/data/categories.json'

export const metadata: Metadata = {
  title: 'Artistly – Book Artists Easily',
  description: 'Explore and book top-performing artists on Artistly.',
}

export default function HomePage() {
  return (
    <section className="space-y-10">
      <Hero />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} title={cat.title} image={cat.image} />
        ))}
      </div>
    </section>
  )
}
