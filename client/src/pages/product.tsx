import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { Check, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
}

export default function Product() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart, isAddingToCart } = useCart();
  const { toast } = useToast();

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const product = products?.[0]; // SimpleSip Portable Matcha Maker

  const productImages = [
    "/attached_assets/Gemini_Generated_Image_2e5fpd2e5fpd2e5f_1753122266714.png",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600",
    "https://images.unsplash.com/photo-1556909062-f406f1f86fd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
  ];

  const features = [
    "Effortless & Fast: No more whisking, no more bowls. Get perfectly blended matcha in seconds with just a touch or your voice.",
    "Truly Portable: It's the size of your favorite travel mug! Toss it in your backpack, tote, or car, and you're ready for delicious matcha anywhere.",
    "Hot or Iced: Whether you crave a warm, soothing cup or a refreshing cold blend, SimpleSip handles both with ease.",
    "No Mess, No Fuss: Forget about sticky counters and piles of tools. Our all-in-one design means less cleanup and more sipping!",
    "Ready When You Are: Your ingredients are contained, so you're always prepared for that matcha craving, no matter where you are."
  ];

  const included = [
    "1 SimpleSip Portable Matcha Maker",
    "USB Charging Cable", 
    "Small Cleaning Brush",
    "Quick Start Guide"
  ];

  const handleAddToCart = () => {
    if (!product) return;
    
    addToCart({ productId: product.id, quantity: 1 });
    toast({
      title: "Added to cart!",
      description: "SimpleSip Portable Matcha Maker has been added to your cart.",
    });
  };

  if (isLoading) {
    return (
      <div className="pt-20 pb-16 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-matcha-dark"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-20 pb-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            SimpleSip Portable Matcha Maker: Your Matcha, Your Way, Anywhere!
          </h1>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Images */}
          <div className="space-y-6">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={productImages[currentImageIndex]} 
                alt="SimpleSip Portable Matcha Maker" 
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? "bg-matcha-dark" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <motion.img 
                  key={index}
                  src={image} 
                  alt={`Product view ${index + 1}`}
                  className={`rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow h-20 object-cover ${
                    index === currentImageIndex ? "ring-2 ring-matcha-dark" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                />
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tired of the Matcha Mess? We've Got Your Solution!</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Let's be real: making matcha can be a chore. All those tools, the messy whisking, and the time it takes just to get that perfect cup. Plus, who wants to carry around a whole tea ceremony kit just to enjoy their favorite drink on the go?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At <strong>SimpleSip</strong>, we believe delicious matcha should be... well, simple! That's why we created the <strong>Portable Matcha Maker</strong>. It's designed for your busy life, so you can enjoy smooth, perfectly blended matcha whenever, wherever, without the fuss.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why SimpleSip Is Your New Matcha Must-Have:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-matcha-light rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-gray-700">
                      <strong>{feature.split(':')[0]}:</strong>
                      {feature.split(':').slice(1).join(':')}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="text-gray-700 space-y-1">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-matcha-dark">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-matcha-dark">
                  ${(product.price / 100).toFixed(2)}
                </span>
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  🔥 Limited Time Offer
                </Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className="bg-matcha-dark hover:bg-matcha-medium transform hover:scale-105 transition-all duration-300 shadow-lg flex-1"
                  size="lg"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {isAddingToCart ? "Adding..." : "Add to Cart"}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-matcha-dark text-matcha-dark hover:bg-matcha-dark hover:text-white transition-all duration-300"
                  size="lg"
                >
                  Add to Wishlist
                </Button>
              </div>
              
              <p className="text-sm text-gray-600 flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>In Stock - Ready to Ship</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Free Shipping on Orders Over $25</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>30-Day Money-Back Guarantee</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <motion.div 
          className="mt-16 p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience Matcha Freedom</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">Imagine this:</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🌅 Morning Bliss</h4>
              <p className="text-gray-600">Waking up and craving a warm, comforting matcha latte? Make it right in your bed or at your desk.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">⚡ Energy Boost</h4>
              <p className="text-gray-600">Need a quick energy boost before heading to class or practice? Whip up an iced matcha in seconds.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">📚 Study Fuel</h4>
              <p className="text-gray-600">Studying late and want a focused pick-me-up? No problem, your SimpleSip is silent and ready.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
