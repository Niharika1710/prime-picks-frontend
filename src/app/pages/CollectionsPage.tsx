import { motion } from 'motion/react';
import { Product } from '../components/ProductCard';
import { ProductCard } from '../components/ProductCard';
import { useEffect, useState } from 'react';
import { Filter } from 'lucide-react';
import { useRootLayout } from '../RootLayout';

/**
 * Collections Page Component
 *
 * Displays all products with filtering and sorting capabilities.
 * Backend Integration: GET /api/products?category={category}&sort={sort}
 */

export function CollectionsPage() {
  const { onAddToCart } = useRootLayout();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'outerwear', 'dresses', 'accessories', 'jewelry'];

  useEffect(() => {
    // Simulating API call
    const fetchProducts = async () => {
      try {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Mock all products
        const allProducts: Product[] = [
          {
            id: 1,
            name: 'Cashmere Blend Coat',
            category: 'Outerwear',
            price: 499.00,
            image: 'https://images.unsplash.com/photo-1622018168951-9381b60507b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwYmVpZ2V8ZW58MXx8fHwxNzc1NjU3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
            inStock: true
          },
          {
            id: 2,
            name: 'Leather Luxury Watch',
            category: 'Accessories',
            price: 899.00,
            image: 'https://images.unsplash.com/photo-1762513461072-5008c7f6511d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZmFzaGlvbiUyMGFjY2Vzc29yaWVzJTIwd2F0Y2glMjBsdXh1cnl8ZW58MXx8fHwxNzc1NjU3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
            inStock: true
          },
          {
            id: 3,
            name: 'Designer Sunglasses',
            category: 'Accessories',
            price: 349.00,
            image: 'https://images.unsplash.com/photo-1622018168567-2a19663b6c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwYmVpZ2V8ZW58MXx8fHwxNzc1NjU3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
            inStock: true
          },
          {
            id: 4,
            name: 'Silk Evening Dress',
            category: 'Dresses',
            price: 699.00,
            image: 'https://images.unsplash.com/photo-1768123881596-8451eb40608c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzU2NTc4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            inStock: true
          },
          {
            id: 5,
            name: 'Premium Watch Collection',
            category: 'Accessories',
            price: 1299.00,
            image: 'https://images.unsplash.com/photo-1769240171986-d4ba22cf3154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcmVtaXVtJTIwZmFzaGlvbiUyMGFjY2Vzc29yaWVzJTIwd2F0Y2glMjBsdXh1cnl8ZW58MXx8fHwxNzc1NjU3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
            inStock: true
          },
          {
            id: 6,
            name: 'Gold Bracelet Set',
            category: 'Jewelry',
            price: 449.00,
            image: 'https://images.unsplash.com/photo-1601281866896-1576541e77a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzU2NTc4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            inStock: true
          },
          {
            id: 7,
            name: 'Tailored Blazer',
            category: 'Outerwear',
            price: 599.00,
            image: 'https://images.unsplash.com/photo-1744551154437-133615e57adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzU2NTc4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            inStock: true
          },
          {
            id: 8,
            name: 'Luxury Perfume',
            category: 'Accessories',
            price: 249.00,
            image: 'https://images.unsplash.com/photo-1711359022098-0652aba5c009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzU2NTc4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
            inStock: true
          },
          {
            id: 9,
            name: 'Elegant White Dress',
            category: 'Dresses',
            price: 549.00,
            image: 'https://images.unsplash.com/photo-1762605135376-ae5af70a5628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwYmVpZ2V8ZW58MXx8fHwxNzc1NjU3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
            inStock: true
          }
        ];

        // Filter by category if needed
        const filtered = selectedCategory === 'all'
          ? allProducts
          : allProducts.filter(p => p.category.toLowerCase() === selectedCategory);

        setProducts(filtered);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-4 tracking-tight">
            Our Collections
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our complete range of carefully curated luxury fashion pieces
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 flex flex-wrap items-center gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Filter className="w-5 h-5" />
            <span className="text-sm tracking-wide">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 text-sm tracking-wide transition-colors duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-primary/10'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                index={index}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
