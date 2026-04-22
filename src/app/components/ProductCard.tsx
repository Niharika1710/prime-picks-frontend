import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

// Product interface matching expected backend API response
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description?: string;
  inStock?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  index?: number;
}

export function ProductCard({ product, onAddToCart, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer shadow-sm hover:shadow-lg transition"
    >
      {/* Product Image */}
      <div className="relative h-[400px] mb-4 overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          
        />

        {/* Add to Cart Button - appears on hover */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 left-4 right-4 bg-white text-foreground py-3 px-6 flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="tracking-wide">Add to Cart</span>
        </motion.button>
      </div>

      {/* Product Info */}
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground tracking-wider uppercase">
          {product.category}
        </p>
        <h3 className="text-foreground tracking-wide">
          {product.name}
        </h3>
        <p className="text-foreground/80">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
}
