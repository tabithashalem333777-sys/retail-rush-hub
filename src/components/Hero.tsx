import { Button } from "@/components/ui/button";
import { Truck, Shield, Percent } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Shop Smart,
                <br />
                <span className="text-primary-foreground/90">Shop Fast</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg">
                Discover millions of products with lightning-fast delivery, 
                unbeatable prices, and 24/7 customer support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-primary">
                Start Shopping
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Browse Deals
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-foreground/20 p-3 rounded-lg">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Free Shipping</h3>
                  <p className="text-sm text-primary-foreground/70">On orders $35+</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary-foreground/20 p-3 rounded-lg">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Secure Shopping</h3>
                  <p className="text-sm text-primary-foreground/70">100% Protected</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-primary-foreground/20 p-3 rounded-lg">
                  <Percent className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Best Deals</h3>
                  <p className="text-sm text-primary-foreground/70">Daily discounts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Fast delivery and shopping"
              className="w-full h-auto rounded-2xl shadow-hover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;