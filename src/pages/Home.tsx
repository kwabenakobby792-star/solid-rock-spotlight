import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Users, GraduationCap, ArrowRight } from "lucide-react";

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
              Quick Access
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find what you need to get started with Solid Rock Educational Complex
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-card transition-smooth group cursor-pointer">
              <Link to="/admissions">
                <CardHeader className="text-center">
                  <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">Admissions</CardTitle>
                  <CardDescription>
                    Start your enrollment process and join our educational community
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="hover:shadow-card transition-smooth group cursor-pointer">
              <Link to="/academics">
                <CardHeader className="text-center">
                  <div className="bg-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <BookOpen className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">Academics</CardTitle>
                  <CardDescription>
                    Explore our comprehensive programs and curriculum offerings
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    View Programs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Link>
            </Card>
            
            <Card className="hover:shadow-card transition-smooth group cursor-pointer">
              <Link to="/contact">
                <CardHeader className="text-center">
                  <div className="bg-accent p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <Users className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">Contact</CardTitle>
                  <CardDescription>
                    Get in touch with our team for information and support
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    Contact Us
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