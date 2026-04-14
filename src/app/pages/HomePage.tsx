import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Categories } from '../components/Categories';
import { TrendingCollections } from '../components/TrendingCollections';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { useRootLayout } from '../RootLayout';

export function HomePage() {
  const { onAddToCart } = useRootLayout();

  return (
    <>
      {/* Hero Section - Full viewport with scroll indicator */}
      <Hero />

      {/* Featured Products - API-ready component */}
      <FeaturedProducts onAddToCart={onAddToCart} />

      {/* Categories Section */}
      <Categories />

      {/* Trending Collections */}
      <TrendingCollections />

      {/* Why Choose Us - Trust signals */}
      <WhyChooseUs />
    </>
  );
}
