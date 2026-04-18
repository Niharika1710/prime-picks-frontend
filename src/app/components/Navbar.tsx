import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartItemCount?: number;
  onCartClick?: () => void;
  currentPath?: string;
}

export function Navbar({ cartItemCount = 0, onCartClick, currentPath = '/' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

const userData = localStorage.getItem("user");
const user = userData ? JSON.parse(userData) : null;
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Brands', path: '/brands' },
    { name: 'About', path: '/about' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif tracking-tight text-foreground">
              Prime Picks
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`relative text-[15px] tracking-wide transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-[24px] left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Cart, Account & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Sign In Link - Desktop */}
            {user ? (
  <div className="relative hidden md:flex">
    <button
      onClick={() => window.location.href = "/profile"}
      className="flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
    >
      <User className="w-4 h-4" />
      <span>{user.name}</span>
    </button>

    {dropdownOpen && (
      <div className="absolute right-0 mt-2 w-40 bg-white border shadow-md rounded-md z-50">
        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    )}
  </div>
) : (
  <a
    href="/auth"
    className="hidden md:flex items-center gap-2 text-sm text-foreground/70 hover:text-foreground"
  >
    <User className="w-4 h-4" />
    <span>Sign In</span>
  </a>
)}
            {/* Cart Icon */}
            <button
              onClick={() => window.location.href = "/cart"}
              className="relative p-2 hover:bg-secondary/50 rounded-full transition-colors duration-300"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cartItemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center"
                >
                  {cartItemCount}
                </motion.span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary/50 rounded-full transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-foreground'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              {user ? (
  <button
    onClick={() => {
      localStorage.removeItem("user");
      window.location.href = "/";
    }}
    className="flex items-center gap-2 text-lg text-foreground/70 hover:text-foreground transition-colors duration-300 pt-4 border-t border-border"
  >
    <User className="w-5 h-5" />
    <span>Logout</span>
  </button>
) : (
  <a
    href="/auth"
    className="flex items-center gap-2 text-lg text-foreground/70 hover:text-foreground transition-colors duration-300 pt-4 border-t border-border"
  >
    <User className="w-5 h-5" />
    <span>Sign In</span>
  </a>
)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
