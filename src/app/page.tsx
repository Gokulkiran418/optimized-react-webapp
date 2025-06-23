import { Metadata } from 'next'
import CategoryCard from '@/components/CategoryCard'
import categories from '@/data/categories.json'

export const metadata: Metadata = {
  title: 'Artistly – Book Artists Easily',
  description: 'Explore and book top-performing artists on Artistly.',
}

export default function HomePage() {
  return (
    <section className="space-y-10">
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto py-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Discover & Book Performing Artists
        </h1>
        <p className="text-muted-foreground mb-6">
          From Singers to DJs — explore artists for your next big event.
        </p>
        <a
          href="/artists"
          className="inline-block bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/80 transition"
        >
          Explore Artists
        </a>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} title={cat.title} image={cat.image} />
        ))}
      </div>
    </section>
  )
}
