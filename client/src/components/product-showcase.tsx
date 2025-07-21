import { motion } from "framer-motion";

export default function ProductShowcase() {
  const scenarios = [
    {
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Morning Ritual Made Easy",
      description: "Waking up and making a hot matcha latte in your dorm room without waking anyone up."
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Pre-Workout Energy",
      description: "Boosting your focus with a cold matcha energy drink right before practice."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Study Session Fuel",
      description: "Enjoying a perfectly whisked matcha while studying at the library."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Matcha, Your Way – No Mess, No Stress!
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <motion.div 
              key={scenario.title}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src={scenario.image} 
                alt={scenario.title} 
                className="rounded-xl shadow-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{scenario.title}</h3>
              <p className="text-gray-600">{scenario.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our sleek, cup-sized maker handles both hot and cold, and with <strong>voice command or a simple button</strong>, your perfect matcha is ready when you are. No more messy counters, no more forgotten tools, no more wasted time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
