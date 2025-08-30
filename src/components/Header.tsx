import { Search, ShoppingCart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Header = () => {
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-background border-b shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar with delivery info */}
        <div className="hidden md:block text-sm py-2 text-muted-foreground text-center border-b">
          Free shipping on orders over $35 • 30-day returns • Customer support 24/7
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <div className="text-2xl font-bold text-foreground">
              Shop<span className="text-primary">Easy</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search for products..."
                className="pr-12 h-10 rounded-lg border-border focus:ring-primary"
              />
              <Button
                size="sm"
                className="absolute right-1 top-1 h-8 px-3 bg-primary hover:bg-primary/90"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-5 w-5 mr-2" />
              Account
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <span className="hidden md:inline ml-2">Cart</span>
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 pb-4">
          <Button variant="ghost" size="sm" className="font-medium">
            Home
          </Button>
          <Button variant="ghost" size="sm">
            Shop
          </Button>
          <Button variant="ghost" size="sm">
            Categories
          </Button>
          <Button variant="ghost" size="sm">
            Orders
          </Button>
          <Button variant="ghost" size="sm">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;