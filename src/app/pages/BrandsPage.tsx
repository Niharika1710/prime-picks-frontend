import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const brands = [
  {
    name: 'Maison Laurent',
    description: 'French heritage meets modern elegance',
    specialty: 'Haute Couture',
    image: 'https://images.unsplash.com/photo-1762605135376-ae5af70a5628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwYmVpZ2V8ZW58MXx8fHwxNzc1NjU3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    established: '1985'
  },
  {
    name: 'Vero Luxe',
    description: 'Italian craftsmanship, timeless design',
    specialty: 'Leather Goods',
    image: 'https://images.unsplash.com/photo-1622018168567-2a19663b6c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsaXN0JTIwYmVpZ2V8ZW58MXx8fHwxNzc1NjU3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    established: '1978'
  },
  {
    name: 'Chronos & Co.',
    description: 'Swiss precision in luxury timepieces',
    specialty: 'Watches',
    image: 'https://images.unsplash.com/photo-1765446904696-15840809580c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcmVtaXVtJTIwZmFzaGlvbiUyMGFjY2Vzc29yaWVzJTIwd2F0Y2glMjBsdXh1cnl8ZW58MXx8fHwxNzc1NjU3ODkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    established: '1992'
  },
  {
    name: 'Stella Nova',
    description: 'Contemporary elegance for modern women',
    specialty: 'Ready-to-Wear',
    image: 'https://images.unsplash.com/photo-1768123881596-8451eb40608c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzU2NTc4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    established: '2005'
  },
  {
    name: 'Bennett & Stone',
    description: 'British tailoring excellence',
    specialty: 'Menswear',
    image: 'https://images.unsplash.com/photo-1744551154437-133615e57adb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzU2NTc4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    established: '1968'
  },
  {
    name: 'Aureate',
    description: 'Fine jewelry and precious metals',
    specialty: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1601281866896-1576541e77a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzU2NTc4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    established: '2010'
  }
];

const brandValues = [
  {
    title: 'Authenticity',
    description: 'Every piece comes with a certificate of authenticity and brand guarantee'
  },
  {
    title: 'Sustainability',
    description: 'Our partner brands commit to ethical sourcing and sustainable practices'
  },
  {
    title: 'Excellence',
    description: 'We curate only the finest brands known for exceptional quality and craftsmanship'
  }
];

export function BrandsPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6 tracking-tight">
            Our Brands
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We partner with the world's most prestigious fashion houses, each selected for their commitment to excellence, craftsmanship, and timeless design.
          </p>
        </motion.div>

        {/* Brand Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 bg-secondary/30 p-12"
        >
          {brandValues.map((value, index) => (
            <div key={value.title} className="text-center">
              <h3 className="text-xl text-foreground mb-3 tracking-wide">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Brand Image */}
                <div className="w-full md:w-48 h-48 flex-shrink-0 overflow-hidden bg-muted">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Brand Info */}
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">
                      Est. {brand.established}
                    </span>
                  </div>
                  <h2 className="text-3xl font-serif text-foreground mb-3 tracking-tight">
                    {brand.name}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-foreground">
                      Specialty: <span className="text-primary">{brand.specialty}</span>
                    </span>
                  </div>
                  <button className="group/btn flex items-center gap-2 text-sm tracking-wide text-foreground hover:text-primary transition-colors duration-300">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center bg-primary/5 py-16 px-8"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4 tracking-tight">
            Interested in Partnership?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking to collaborate with exceptional brands that share our values of quality, authenticity, and timeless design.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/90 transition-colors duration-300 tracking-wide">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
}
