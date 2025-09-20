import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Headphones, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-subtle py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-lighter/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-primary mb-6 leading-tight">
            Your Trusted
            <span className="bg-gradient-accent bg-clip-text text-transparent block">
              Phone Shop
            </span>
            Agyekum Annex
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Quality smartphones and accessories at affordable prices. We offer the latest phones, chargers, earphones, and more with reliable service and warranty.
          </p>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/phones">
              <Button variant="hero" size="lg" className="text-lg px-8 py-3">
                Shop Phones
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Call Now
              </Button>
            </Link>
          </div>
          
          {/* Features highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center group">
              <div className="bg-accent-lighter p-4 rounded-full mb-4 group-hover:scale-110 transition-bounce shadow-card">
                <Smartphone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Latest Phones</h3>
              <p className="text-muted-foreground">New and used smartphones from trusted brands</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="bg-secondary-lighter p-4 rounded-full mb-4 group-hover:scale-110 transition-bounce shadow-card">
                <Headphones className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Quality Accessories</h3>
              <p className="text-muted-foreground">Chargers, earphones, cases, and power banks</p>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="bg-primary-lighter p-4 rounded-full mb-4 group-hover:scale-110 transition-bounce shadow-card">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-primary mb-2">Warranty & Service</h3>
              <p className="text-muted-foreground">Reliable support and warranty on all products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;