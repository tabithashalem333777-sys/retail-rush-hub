import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, Truck, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

const OrderTracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const trackingSteps = [
    { icon: Package, title: "Order Confirmed", description: "Your order has been placed", completed: true },
    { icon: Package, title: "Processing", description: "Order is being prepared", completed: true },
    { icon: Truck, title: "Shipped", description: "Package is on the way", completed: true },
    { icon: MapPin, title: "Out for Delivery", description: "Package is with delivery partner", completed: false },
    { icon: CheckCircle, title: "Delivered", description: "Package delivered successfully", completed: false },
  ];

  const handleTrack = () => {
    if (trackingId.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Track Your Order
            </h2>
            <p className="text-lg text-muted-foreground">
              Enter your order ID below to get real-time updates on your delivery status
            </p>
          </div>

          {/* Tracking Input */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter your order ID (e.g., SE123456789)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="h-12"
                  />
                </div>
                <Button 
                  onClick={handleTrack}
                  size="lg"
                  className="h-12 px-8"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Track Order
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tracking Results */}
          {isTracking && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Package className="h-5 w-5 text-primary" />
                  <span>Order #{trackingId || "SE123456789"}</span>
                </CardTitle>
                <p className="text-muted-foreground">
                  Estimated delivery: Tomorrow, Dec 15th by 8:00 PM
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`p-2 rounded-full ${
                          step.completed 
                            ? "bg-success text-success-foreground" 
                            : "bg-muted text-muted-foreground"
                        }`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-semibold ${
                            step.completed ? "text-foreground" : "text-muted-foreground"
                          }`}>
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                          {step.completed && (
                            <p className="text-sm text-success mt-1">
                              ✓ Completed
                            </p>
                          )}
                        </div>
                        {index < trackingSteps.length - 1 && (
                          <div className={`w-px h-8 ml-4 ${
                            step.completed ? "bg-success" : "bg-muted"
                          }`} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;