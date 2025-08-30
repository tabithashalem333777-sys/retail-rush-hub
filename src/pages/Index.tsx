import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import Categories from "../components/Categories";
import OrderTracking from "../components/OrderTracking";
import Testimonials from "../components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductGrid />
      <Categories />
      <OrderTracking />
      <Testimonials />
    </div>
  );
};

export default Index;
