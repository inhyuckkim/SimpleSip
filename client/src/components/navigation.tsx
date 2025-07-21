import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems, totalItems } = useCart();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/attached_assets/Gemini_Generated_Image_kuw4kxkuw4kxkuw4_1753123145947.png" 
              alt="SimpleSip Logo" 
              className="w-20 h-20 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href)
                    ? "text-matcha-dark font-medium"
                    : "text-gray-700 hover:text-matcha-dark"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="relative">
                  <ShoppingCart className="h-4 w-4" />
                  {totalItems > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                    >
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-8">
                  {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty</p>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4">
                          <img 
                            src={item.product.imageUrl} 
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{item.product.name}</h4>
                            <p className="text-sm text-gray-600">
                              ${(item.product.price / 100).toFixed(2)} × {item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div className="pt-4 border-t">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>${(cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0) / 100).toFixed(2)}</span>
                        </div>
                        <Button className="w-full mt-4 bg-matcha-dark hover:bg-matcha-medium">
                          Checkout
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Button className="bg-matcha-dark hover:bg-matcha-medium">
              <Link href="/product">Shop Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="relative">
                  <ShoppingCart className="h-4 w-4" />
                  {totalItems > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                    >
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-8">
                  {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty</p>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4">
                          <img 
                            src={item.product.imageUrl} 
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{item.product.name}</h4>
                            <p className="text-sm text-gray-600">
                              ${(item.product.price / 100).toFixed(2)} × {item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div className="pt-4 border-t">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>${(cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0) / 100).toFixed(2)}</span>
                        </div>
                        <Button className="w-full mt-4 bg-matcha-dark hover:bg-matcha-medium">
                          Checkout
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-2 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 transition-colors ${
                    isActive(item.href)
                      ? "text-matcha-dark font-medium"
                      : "text-gray-700 hover:text-matcha-dark"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="w-full bg-matcha-dark hover:bg-matcha-medium mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href="/product">Shop Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
