import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Shop<span className="text-primary">Easy</span>
            </div>
            <p className="text-background/70 text-sm">
              Your trusted online marketplace for quality products, 
              fast delivery, and exceptional customer service. 
              Shop with confidence!
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-background/70">
                <Phone className="h-4 w-4" />
                <span>1-800-SHOP-EASY</span>
              </div>
              <div className="flex items-center space-x-2 text-background/70">
                <Mail className="h-4 w-4" />
                <span>support@shopeasy.com</span>
              </div>
              <div className="flex items-center space-x-2 text-background/70">
                <MapPin className="h-4 w-4" />
                <span>123 Commerce St, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Accessibility</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-background/70 text-sm">
              Subscribe to get special offers, free giveaways, and updates.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-background/70">Follow us:</span>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10">
                    <Youtube className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features bar */}
        <div className="py-8 border-t border-background/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-primary p-2 rounded-full">
                <Truck className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Free Shipping</h4>
                <p className="text-xs text-background/70">On orders over $35</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-primary p-2 rounded-full">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Secure Payment</h4>
                <p className="text-xs text-background/70">100% protected transactions</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-primary p-2 rounded-full">
                <CreditCard className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Easy Returns</h4>
                <p className="text-xs text-background/70">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-background/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-background/70">
            © 2024 ShopEasy. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-xs text-background/70">
            <span>We accept:</span>
            <div className="flex space-x-2">
              <div className="bg-background/10 px-2 py-1 rounded text-xs">VISA</div>
              <div className="bg-background/10 px-2 py-1 rounded text-xs">MC</div>
              <div className="bg-background/10 px-2 py-1 rounded text-xs">AMEX</div>
              <div className="bg-background/10 px-2 py-1 rounded text-xs">PayPal</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;