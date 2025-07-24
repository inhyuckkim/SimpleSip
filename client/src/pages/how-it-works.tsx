import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Mic, Power, Clock, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add Your Ingredients",
      image: "/attached_assets/Step 1_1753379301582.png",
      description: "Simply open the lid of your SimpleSip Portable Matcha Maker and add your desired amount of matcha powder. For a standard serving, we recommend 1-2 teaspoons (2-4 grams) of matcha powder.",
      details: [
        "Pour in hot or cold water – whatever your craving calls for!",
        "Fill up to the designated fill line (around 6-8 ounces or 180-240ml)",
        "Leave a little room for blending",
        "No need for multiple bowls, whisks, or measuring cups"
      ]
    },
    {
      number: "02", 
      title: "Activate & Blend",
      image: "/attached_assets/Step 2_1753379312360.png",
      description: "Choose your blending method: use voice command or simply press the power button. Watch the magic happen as your SimpleSip perfectly whisks your matcha to a smooth, frothy consistency in seconds.",
      details: [
        "Voice Command: Say 'Hey SimpleSip, make matcha'",
        "Button Operation: Press the power button on top",
        "Perfect whisking in seconds",
        "No messy whisking, no clumpy matcha"
      ]
    },
    {
      number: "03",
      title: "Sip & Enjoy!",
      image: "/attached_assets/Step 3_1753379325000.png", 
      description: "Your perfectly blended hot or cold matcha is now ready to enjoy! Sip directly from your SimpleSip – it's designed to be your cup and your maker.",
      details: [
        "Drink directly from the SimpleSip",
        "No extra clean-up needed",
        "Perfect for on-the-go enjoyment",
        "Experience mess-free matcha freedom"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Ready in Seconds",
      description: "From powder to perfect matcha in just moments"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "No Mess",
      description: "All-in-one design means less cleanup"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Control",
      description: "Hands-free operation with voice commands"
    },
    {
      icon: <Power className="w-6 h-6" />,
      title: "Simple Operation",
      description: "One-button simplicity for instant results"
    }
  ];

  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="bg-matcha-light text-white mb-4">
            How It Works
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            SimpleSip: Matcha Magic in 3 Easy Steps!
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At SimpleSip, we believe making delicious matcha should be effortless. That's why we designed our 
            Portable Matcha Maker to transform your matcha routine from messy and time-consuming into pure, simple bliss. 
            Here's how easily you can enjoy your perfect cup, anytime, anywhere:
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="space-y-20 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-matcha-dark to-matcha-medium rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{step.title}</h2>
                </div>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-matcha-light rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Why SimpleSip Changes Everything
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-matcha-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <div className="text-white">{benefit.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-green-50 to-white rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Simplify Your Matcha Routine?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the SimpleSip family and discover how easy and enjoyable your matcha moments can be.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/product">
              <Button 
                size="lg" 
                className="bg-matcha-dark hover:bg-matcha-medium transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop SimpleSip Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-matcha-dark text-matcha-dark hover:bg-matcha-dark hover:text-white transition-all duration-300"
              >
                Have Questions?
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}