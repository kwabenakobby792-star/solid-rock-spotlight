import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Phone, Star } from "lucide-react";

const Phones = () => {
  const phones = [
    {
      id: 1,
      name: "iPhone 14",
      price: "GHS 3,500",
      condition: "New",
      description: "Latest iPhone with advanced camera system",
      rating: 5
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: "GHS 2,800",
      condition: "New",
      description: "Flagship Android with exceptional performance",
      rating: 5
    },
    {
      id: 3,
      name: "iPhone 13",
      price: "GHS 2,200",
      condition: "Used",
      description: "Excellent condition, minimal usage",
      rating: 4
    },
    {
      id: 4,
      name: "Xiaomi Redmi Note 12",
      price: "GHS 1,200",
      condition: "New",
      description: "Great value smartphone with good performance",
      rating: 4
    },
    {
      id: 5,
      name: "Samsung Galaxy A54",
      price: "GHS 1,800",
      condition: "New",
      description: "Mid-range phone with premium features",
      rating: 4
    },
    {
      id: 6,
      name: "Infinix Hot 30",
      price: "GHS 800",
      condition: "New",
      description: "Budget-friendly with decent specs",
      rating: 3
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="bg-gradient-hero p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Smartphone className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
              Our Phones
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our wide selection of new and used smartphones
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phones.map((phone) => (
              <Card key={phone.id} className="hover:shadow-card transition-smooth group">
                <CardHeader>
                  <div className="bg-gradient-subtle p-8 rounded-lg mb-4 flex items-center justify-center">
                    <Smartphone className="h-16 w-16 text-primary" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-primary">{phone.name}</CardTitle>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < phone.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <Badge variant={phone.condition === "New" ? "default" : "secondary"}>
                      {phone.condition}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {phone.description}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-2xl text-primary">{phone.price}</span>
                    <Button variant="cta" className="group-hover:scale-105 transition-bounce">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl text-primary mb-4">
            Interested in a Phone?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for more details, availability, and the best prices
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

export default Phones;