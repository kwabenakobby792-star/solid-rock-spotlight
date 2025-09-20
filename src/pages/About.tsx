import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Shield, Heart, Star, Phone, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-gradient-subtle py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">
              About Agyekum Annex
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted partner for quality phones and accessories with reliable service and competitive prices.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground">
                Built on trust, quality, and customer satisfaction
              </p>
            </div>
            
            <Card className="shadow-card">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Agyekum Annex was founded with a simple mission: to provide quality smartphones and accessories 
                  at affordable prices with exceptional customer service. We understand that your phone is an 
                  essential part of your daily life, and we're here to help you find the perfect device and accessories.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  From the latest flagship smartphones to budget-friendly options, we carefully select our inventory 
                  to ensure we offer devices that meet various needs and budgets. Our accessories range from essential 
                  chargers and protective cases to premium audio equipment and power banks.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  What sets us apart is our commitment to customer satisfaction. We provide honest advice, 
                  competitive pricing, and reliable after-sales support to ensure you're completely satisfied 
                  with your purchase.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Why Choose Agyekum Annex?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our commitment to quality and service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-accent-lighter p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Quality Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Carefully selected phones and accessories from trusted brands and suppliers
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-secondary-lighter p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-lg text-primary">Best Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Competitive pricing on all products with special deals and discounts
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-primary-lighter p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Warranty & Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Reliable warranty coverage and ongoing support for all purchases
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-primary">Customer Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Personalized service and expert advice to help you make the right choice
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground">
                Ready to find your perfect phone or accessory? Contact us today!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-gradient-hero p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-primary">Call Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For immediate assistance, product inquiries, or to place an order, give us a call.
                  </p>
                  <p className="text-primary font-semibold text-lg">
                    📞 0591576197
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-secondary p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-primary">Email Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Send us your questions, product inquiries, or special requests via email.
                  </p>
                  <p className="text-primary font-semibold">
                    📧 agyekumkwabena60@gmail.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;