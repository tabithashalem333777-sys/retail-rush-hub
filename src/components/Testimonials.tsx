import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      review: "Absolutely amazing service! My order arrived the next day in perfect condition. The product quality exceeded my expectations and the customer support was incredibly helpful.",
      initials: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
      review: "I've been shopping here for over a year now and they never disappoint. Fast shipping, great prices, and authentic products. Highly recommend to everyone!",
      initials: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Austin, TX",
      rating: 5,
      review: "The best online shopping experience I've had. Easy returns, excellent customer service, and the tracking system is fantastic. Will definitely shop again!",
      initials: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Seattle, WA",
      rating: 5,
      review: "Outstanding quality and fast delivery. The product descriptions are accurate and the photos represent exactly what you get. Very impressed!",
      initials: "DT"
    },
    {
      id: 5,
      name: "Lisa Wang",
      location: "Chicago, IL",
      rating: 5,
      review: "Great value for money and exceptional customer care. Had an issue with my order and it was resolved within hours. Truly professional service!",
      initials: "LW"
    },
    {
      id: 6,
      name: "James Miller",
      location: "Miami, FL",
      rating: 5,
      review: "Reliable, fast, and affordable. Everything you want in an online store. The mobile app is also very user-friendly. Five stars!",
      initials: "JM"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say 
            about their shopping experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-muted-foreground/30" />
                  <p className="text-muted-foreground italic pl-4">
                    "{testimonial.review}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-muted-foreground">
            <div className="flex items-center">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold">4.9/5</span>
            <span>from 50,000+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;