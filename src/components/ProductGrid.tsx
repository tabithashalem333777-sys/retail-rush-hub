import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import headphonesImg from "@/assets/product-headphones.jpg";
import phoneImg from "@/assets/product-phone.jpg";
import laptopImg from "@/assets/product-laptop.jpg";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Noise-Cancelling Headphones",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 1234,
      image: headphonesImg,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Premium Smartphone - Latest Model",
      price: 899,
      originalPrice: 1099,
      rating: 4.6,
      reviews: 2567,
      image: phoneImg,
      badge: "20% OFF"
    },
    {
      id: 3,
      name: "Professional Laptop - 16GB RAM",
      price: 1299,
      rating: 4.9,
      reviews: 892,
      image: laptopImg,
      badge: "Editor's Choice"
    },
    {
      id: 4,
      name: "Wireless Gaming Mouse",
      price: 79,
      originalPrice: 99,
      rating: 4.4,
      reviews: 445,
      image: headphonesImg, // Reusing for demo
    },
    {
      id: 5,
      name: "4K Webcam for Streaming",
      price: 189,
      rating: 4.7,
      reviews: 678,
      image: phoneImg, // Reusing for demo
    },
    {
      id: 6,
      name: "Mechanical Keyboard RGB",
      price: 149,
      originalPrice: 199,
      rating: 4.5,
      reviews: 334,
      image: laptopImg, // Reusing for demo
      badge: "NEW"
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of the most popular products, 
            carefully chosen for quality and value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;