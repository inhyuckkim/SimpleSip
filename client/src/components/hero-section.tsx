import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Tired of Messy Matcha? Meet Your{" "}
              <span className="text-matcha-dark">New Best Friend!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Matcha Magic, Anytime, Anywhere. Finally!
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Love matcha but hate the hassle? We get it. The whisking, the bowls, the endless clean-up... it's a lot! That's why we invented the <strong>Portable Matcha Maker</strong> – your all-in-one solution for delicious, perfectly blended matcha in seconds, wherever you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-matcha-dark hover:bg-matcha-medium transform hover:scale-105 transition-all duration-300 shadow-lg">
                <Link href="/product">Get Yours for Just $30!</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-matcha-dark text-matcha-dark hover:bg-matcha-dark hover:text-white transition-all duration-300">
                Watch Demo
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/attached_assets/Gemini_Generated_Image_2e5fpd2e5fpd2e5f_1753122266714.png" 
              alt="SimpleSip Portable Matcha Maker making perfect matcha" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
