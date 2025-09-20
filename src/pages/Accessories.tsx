import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Headphones, Battery, Phone, Usb, Shield, Star } from "lucide-react";

const Accessories = () => {
  const accessories = [
    {
      id: 1,
      name: "iPhone Charger",
      price: "GHS 80",
      category: "Chargers",
      description: "Original Lightning cable with fast charging",
      icon: Usb,
      rating: 5
    },
    {
      id: 2,
      name: "Samsung Fast Charger",
      price: "GHS 70",
      category: "Chargers", 
      description: "Type-C fast charging cable",
      icon: Usb,
      rating: 5
    },
    {
      id: 3,
      name: "Wireless Earphones",
      price: "GHS 150",
      category: "Audio",
      description: "Bluetooth earphones with noise cancellation",
      icon: Headphones,
      rating: 4
    },
    {
      id: 4,
      name: "Power Bank 10000mAh",
      price: "GHS 120",
      category: "Power",
      description: "Portable charger with dual USB ports",
      icon: Battery,
      rating: 4
    },
    {
      id: 5,
      name: "Phone Case",
      price: "GHS 35",
      category: "Protection",
      description: "Shock-proof case with screen protection",
      icon: Shield,
      rating: 4
    },
    {
      id: 6,
      name: "Car Charger",
      price: "GHS 45",
      category: "Chargers",
      description: "Dual port car charger with fast charging",
      icon: Usb,
      rating: 4
    },
    {
      id: 7,
      name: "Wired Earphones",
      price: "GHS 25",
      category: "Audio",
      description: "High-quality wired earphones with mic",
      icon: Headphones,
      rating: 3
    },
    {
      id: 8,
      name: "Phone Holder",
      price: "GHS 30",
      category: "Accessories",
      description: "Adjustable phone stand for desk or car",
      icon: Phone,
      rating: 4
    }
  ];

  const categories = ["All", "Chargers", "Audio", "Power", "Protection", "Accessories"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-secondary p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Headphones className="h-10 w-10 text-secondary-foreground" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              Phone Accessories
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete your phone setup with our quality accessories
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Badge key={category} variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-smooth">
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((accessory) => {
              const IconComponent = accessory.icon;
              return (
                <Card key={accessory.id} className="hover:shadow-card transition-smooth group">
                  <CardHeader className="text-center">
                    <div className="bg-gradient-subtle p-6 rounded-lg mb-4 flex items-center justify-center mx-auto w-20 h-20">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-primary">{accessory.name}</CardTitle>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${i < accessory.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <Badge variant="secondary" className="mt-2">
                      {accessory.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4 text-sm">
                      {accessory.description}
                    </CardDescription>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xl text-primary">{accessory.price}</span>
                      <Button variant="cta" size="sm" className="group-hover:scale-105 transition-bounce">
                        Buy
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-primary mb-4">
            Need a Specific Accessory?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Contact us and we'll help you find the perfect accessory
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8">
              📞 Call: 0591576197
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              📧 Email Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accessories;