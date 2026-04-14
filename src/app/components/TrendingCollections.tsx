import { motion } from 'motion/react';

const collections = [
  {
    title: 'Spring Essentials',
    subtitle: '2026 Collection',
    image: 'https://images.unsplash.com/photo-1622018168940-1d95f59ca85a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwYmVpZ2V8ZW58MXx8fHwxNzc1NjU3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Luxury Timepieces',
    subtitle: 'Limited Edition',
    image: 'https://images.unsplash.com/photo-1765446904696-15840809580c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcmVtaXVtJTIwZmFzaGlvbiUyMGFjY2Vzc29yaWVzJTIwd2F0Y2glMjBsdXh1cnl8ZW58MXx8fHwxNzc1NjU3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Evening Elegance',
    subtitle: 'Signature Pieces',
    image: 'https://images.unsplash.com/photo-1711359022098-0652aba5c009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzU2NTc4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function TrendingCollections() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 tracking-tight">
            Trending Collections
          </h2>
          <p className="text-muted-foreground">
            Discover what's captivating our community
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Collection Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm tracking-widest uppercase opacity-90 mb-1">
                    {collection.subtitle}
                  </p>
                  <h3 className="text-2xl font-serif tracking-tight">
                    {collection.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
