import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/attached_assets/Gemini_Generated_Image_kuw4kxkuw4kxkuw4_1753123145947.png" 
                alt="SimpleSip Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Making matcha simple, portable, and mess-free for the modern lifestyle.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/product" className="hover:text-white transition-colors">Product</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Get the latest news and updates from SimpleSip.</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400" 
              />
              <Button className="bg-matcha-dark hover:bg-matcha-medium ml-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SimpleSip. All rights reserved. Making matcha simple, one sip at a time.</p>
        </div>
      </div>
    </footer>
  );
}
