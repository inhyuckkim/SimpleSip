import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Sarah L.",
      role: "Student",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64",
      rating: 5,
      text: "I love my SimpleSip! It's so easy to use, and I can finally make matcha in my dorm without making a huge mess."
    },
    {
      name: "Jessica M.",
      role: "Athlete",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64",
      rating: 5,
      text: "This is a game-changer for my morning routine. Quick, clean, and delicious every time!"
    },
    {
      name: "Emma K.",
      role: "Young Professional",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64",
      rating: 5,
      text: "Perfect for my busy lifestyle. I can make matcha anywhere, anytime. The voice command feature is amazing!"
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
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">Join thousands of happy matcha lovers</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.name}
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
              <div className="flex items-center">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
