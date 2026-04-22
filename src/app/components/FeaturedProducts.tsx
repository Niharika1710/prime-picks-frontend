import { motion } from 'motion/react';
import { ProductCard, Product } from './ProductCard';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";

import { Navigation, Autoplay } from "swiper/modules";

interface FeaturedProductsProps {
  onAddToCart: (product: Product) => void;
}

const API_BASE_URL = 'https://prime-picks-backend.onrender.com';





export function FeaturedProducts({ onAddToCart }: FeaturedProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_BASE_URL}/api/products/featured`);
      const data = await response.json();

      console.log("API DATA:", data);

      // ✅ SAFE FIX (handles both formats)
      if (Array.isArray(data)) {
        setProducts(data);
      } else if (data.data) {
        setProducts(data.data);
      } else {
        setProducts([]);
      }

    } catch (error) {
      console.error("Error:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);

  if (loading) {
    return (
      <section className="py-24 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-muted-foreground">Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
  return <p className="text-center mt-10">Loading products...</p>;
}

  return (
    <section id="collections" className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 tracking-tight">
            Featured Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces that embody sophistication and timeless appeal
          </p>
        </motion.div>

        <Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  navigation
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  centeredSlides={true}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
>
  {(products || []).map((product, index) => (
    <SwiperSlide key={product.id}>
      <div className="max-w-sm mx-auto">
        <ProductCard
          product={product}
          onAddToCart={onAddToCart}
          index={index}
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      </div>
    </section>
  );
}