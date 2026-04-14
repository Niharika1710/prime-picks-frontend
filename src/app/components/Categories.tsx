import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1744551154437-133615e57adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzU2NTc4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Refined essentials for the modern gentleman'
  },
  {
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1762605135376-ae5af70a5628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwYmVpZ2V8ZW58MXx8fHwxNzc1NjU3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Timeless elegance and contemporary design'
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1774653273863-a689ee748eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwcmVtaXVtJTIwZmFzaGlvbiUyMGFjY2Vzc29yaWVzJTIwd2F0Y2glMjBsdXh1cnl8ZW58MXx8fHwxNzc1NjU3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The finishing touches that complete your look'
  }
];

export function Categories() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-muted-foreground">
            Explore our curated collections
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                {/* Category Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-serif mb-2 tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
