import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl md:text-[12rem] font-serif text-primary mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors duration-300 tracking-wide"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 bg-secondary text-foreground px-8 py-4 hover:bg-secondary/80 transition-colors duration-300 tracking-wide"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20"
        >
          <p className="text-sm text-muted-foreground tracking-wider uppercase">
            Lost in fashion? Let us guide you home.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
