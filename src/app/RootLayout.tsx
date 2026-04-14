import { Outlet, useOutletContext } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Product } from './components/ProductCard';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';

interface RootLayoutContext {
  cartItems: Product[];
  onAddToCart: (product: Product) => void;
}

export function RootLayout() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart!`, {
      duration: 2000,
    });
  };

  const handleCartClick = () => {
    if (cartItems.length > 0) {
      toast.info(`You have ${cartItems.length} item(s) in your cart`);
    } else {
      toast.info('Your cart is empty');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />

      {/* Navigation */}
      <Navbar
        cartItemCount={cartItems.length}
        onCartClick={handleCartClick}
      />

      {/* Main Content */}
      <main className="pt-[72px]">
        <Outlet context={{ cartItems, onAddToCart: handleAddToCart } satisfies RootLayoutContext} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Hook for accessing context in child routes
export function useRootLayout() {
  return useOutletContext<RootLayoutContext>();
}
