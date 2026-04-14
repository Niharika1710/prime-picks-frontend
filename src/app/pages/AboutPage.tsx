import { motion } from 'motion/react';
import { Heart, Users, Award, Globe } from 'lucide-react';

const stats = [
  { number: '15+', label: 'Years of Excellence' },
  { number: '50+', label: 'Luxury Brands' },
  { number: '100K+', label: 'Happy Customers' },
  { number: '30+', label: 'Countries Served' }
];

const values = [
  {
    icon: Heart,
    title: 'Passion for Fashion',
    description: 'We live and breathe fashion, curating only the finest pieces that embody timeless elegance and contemporary style.'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We provide personalized service and support every step of your shopping journey.'
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Every item is authenticated and inspected to meet our rigorous quality standards. We stand behind every purchase.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: "From Milan to Tokyo, we bring the world's finest fashion to your doorstep with express shipping worldwide."
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24">

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden mb-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1762605135012-56a59a059e60"
            alt="About Prime Picks"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative h-full max-w-[1400px] mx-auto px-6 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              About Prime Picks
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Redefining luxury fashion retail since 2011
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6">

        {/* Our Story */}
        <motion.section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2011, Prime Picks was born from a vision to make luxury fashion accessible worldwide.
              </p>
            </div>

            <img
              src="https://images.unsplash.com/photo-1622018168940"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section className="mb-32 bg-primary text-white py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-4xl">{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Values */}
        <motion.section className="mb-32">
          <h2 className="text-4xl font-serif text-center mb-12">Our Values</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="flex gap-4">
                  <Icon className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl">{value.title}</h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>

      </div>
    </div>
  );
}