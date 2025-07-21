import { motion } from "framer-motion";
import { Zap, Package, Thermometer, Mic, Leaf } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "⚡ Instant Gratification",
      description: "Fresh matcha in seconds",
      color: "bg-matcha-light"
    },
    {
      icon: Package,
      title: "✨ Super Portable",
      description: "Small enough to fit in your bag, big enough for your cravings",
      color: "bg-matcha-bright"
    },
    {
      icon: Thermometer,
      title: "🔥🧊 Hot & Cold",
      description: "Craving iced matcha? A warm hug? We've got you",
      color: "bg-accent-warm"
    },
    {
      icon: Mic,
      title: "🗣️ Hands-Free",
      description: "Your choice for effortless blending",
      color: "bg-matcha-dark"
    },
    {
      icon: Leaf,
      title: "🌿 Always Ready",
      description: "No need for extra tools – just your matcha powder and water!",
      color: "bg-matcha-medium"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why You'll Love It
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
