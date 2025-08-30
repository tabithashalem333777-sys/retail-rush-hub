import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

const ProductCard = ({ name, price, originalPrice, rating, reviews, image, badge }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <Card className="group relative overflow-hidden hover:shadow-hover transition-all duration-300 cursor-pointer">
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
          {badge}
        </div>
      )}

      {/* Wishlist button */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-3 right-3 z-10 bg-background/80 hover:bg-background"
        onClick={() => setIsLiked(!isLiked)}
      >
        <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
      </Button>

      <CardContent className="p-0">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-gradient-card">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {renderStars(rating)}
            </div>
            <span className="text-sm text-muted-foreground">({reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;