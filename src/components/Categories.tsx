import { Card, CardContent } from "@/components/ui/card";
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Shirt, 
  Home, 
  Book, 
  Camera, 
  Gamepad2,
  Watch,
  Car,
  Baby,
  Dumbbell
} from "lucide-react";

const Categories = () => {
  const categories = [
    { name: "Electronics", icon: Smartphone, count: "2.5k+" },
    { name: "Computers", icon: Laptop, count: "1.8k+" },
    { name: "Audio", icon: Headphones, count: "950+" },
    { name: "Fashion", icon: Shirt, count: "3.2k+" },
    { name: "Home & Garden", icon: Home, count: "1.5k+" },
    { name: "Books", icon: Book, count: "4.1k+" },
    { name: "Cameras", icon: Camera, count: "680+" },
    { name: "Gaming", icon: Gamepad2, count: "1.2k+" },
    { name: "Watches", icon: Watch, count: "420+" },
    { name: "Automotive", icon: Car, count: "890+" },
    { name: "Baby & Kids", icon: Baby, count: "760+" },
    { name: "Sports", icon: Dumbbell, count: "1.1k+" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our extensive collection of products organized by categories 
            to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.name}
                className="group cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-accent p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {category.count} items
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;