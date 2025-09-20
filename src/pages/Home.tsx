import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Smartphone, Headphones, Phone, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Quick Access Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our collection of phones and accessories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-card transition-smooth group cursor-pointer">
              <Link to="/phones">
                <CardHeader className="text-center">
                  <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <Smartphone className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">Smartphones</CardTitle>
                  <CardDescription>
                    Browse our collection of new and used smartphones
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    Shop Phones
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="hover:shadow-card transition-smooth group cursor-pointer">
              <Link to="/accessories">
                <CardHeader className="text-center">
                  <div className="bg-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <Headphones className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">Accessories</CardTitle>
                  <CardDescription>
                    Chargers, earphones, cases, and power banks
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    Shop Accessories
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="hover:shadow-card transition-smooth group cursor-pointer">
              <Link to="/contact">
                <CardHeader className="text-center">
                  <div className="bg-accent p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <Phone className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">Contact</CardTitle>
                  <CardDescription>
                    Get in touch for prices, availability, and support
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    Call Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;