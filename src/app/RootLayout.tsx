import { Outlet, useOutletContext, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Product } from './components/ProductCard';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface RootLayoutContext {
  cartItems: Product[];
  onAddToCart: (product: Product) => void;
}

export function RootLayout() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const location = useLocation();
  console.log("Saving cart for:", user.email);
  const handleAddToCart = async (product: Product) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  await fetch(`${API_BASE_URL}/api/cart/add`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    userEmail: user.email.toLowerCase(),  // ✅ IMPORTANT
    productName: product.name,
    price: product.price
  })
});

  // keep local UI update also
  setCartItems((prev) => [...prev, product]);

  toast.success(`${product.name} added to cart!`);
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
        currentPath={location.pathname}
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
