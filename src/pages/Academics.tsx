import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Microscope, Calculator, Globe, Palette, Music, ArrowRight } from "lucide-react";

const Academics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-gradient-subtle py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">
              Academic Programs
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive education designed to prepare students for success in higher learning and beyond.
            </p>
          </div>
        </div>
      </section>
      
      {/* Grade Levels */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Grade Levels & Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer quality education across different grade levels with comprehensive curriculum
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-gradient-hero p-3 rounded-lg w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-primary">Primary Education</CardTitle>
                <CardDescription>Foundation building years (Grades 1-6)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Strong foundation in literacy, numeracy, and basic sciences. Focus on developing 
                  critical thinking and study habits.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Reading and Writing Skills</li>
                  <li>• Mathematics Fundamentals</li>
                  <li>• Basic Science Concepts</li>
                  <li>• Social Studies</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-secondary p-3 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl text-primary">Junior Secondary</CardTitle>
                <CardDescription>Intermediate level (Grades 7-9)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Expanded curriculum with specialized subjects and skill development. 
                  Preparation for senior secondary education.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Advanced Mathematics</li>
                  <li>• Science Specializations</li>
                  <li>• Language Arts</li>
                  <li>• Technical Skills</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-accent p-3 rounded-lg w-fit mb-4">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl text-primary">Senior Secondary</CardTitle>
                <CardDescription>Advanced level (Grades 10-12)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  College preparatory curriculum with specialized tracks. 
                  Focus on academic excellence and career preparation.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Advanced Placement Courses</li>
                  <li>• Science & Technology</li>
                  <li>• Arts & Humanities</li>
                  <li>• College Preparation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Core Subjects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Core Subjects
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive curriculum covering essential academic areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader className="pb-3">
                <div className="bg-primary-lighter p-3 rounded-full w-fit mx-auto mb-2">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Mathematics</CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader className="pb-3">
                <div className="bg-accent-lighter p-3 rounded-full w-fit mx-auto mb-2">
                  <Microscope className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Sciences</CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader className="pb-3">
                <div className="bg-secondary-lighter p-3 rounded-full w-fit mx-auto mb-2">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader className="pb-3">
                <div className="bg-primary-lighter p-3 rounded-full w-fit mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Literature</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Special Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Special Programs & Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond academics - developing well-rounded students through diverse activities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-accent p-3 rounded-lg">
                    <Palette className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">Arts & Culture</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Creative expression through visual arts, drama, and cultural activities.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Visual Arts and Design</li>
                  <li>• Drama and Theater</li>
                  <li>• Cultural Studies</li>
                  <li>• Creative Writing</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <Music className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">Music & Performance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developing musical talents and performance skills through various programs.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Choir and Vocal Training</li>
                  <li>• Instrumental Music</li>
                  <li>• School Band</li>
                  <li>• Performance Opportunities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join Solid Rock Educational Complex and build a strong foundation for your future success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Academics;