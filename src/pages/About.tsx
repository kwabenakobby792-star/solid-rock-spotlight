import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-gradient-subtle py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">
              About Solid Rock Educational Complex
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dedicated to nurturing young minds and building strong foundations for academic excellence and character development.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-hero p-3 rounded-lg">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality education that empowers students with strong academic foundations, 
                  critical thinking skills, and strong moral values. We are committed to developing 
                  future leaders who will make positive contributions to society through excellence 
                  in education and character.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <Eye className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading educational institution that serves as a solid rock foundation 
                  for students' academic and personal growth. We envision graduates who are 
                  well-equipped with knowledge, skills, and values to excel in higher education 
                  and become responsible leaders in their communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* History */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
                Our History
              </h2>
              <p className="text-lg text-muted-foreground">
                Building educational excellence since our founding
              </p>
            </div>
            
            <Card className="shadow-card">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Solid Rock Educational Complex was founded with the vision of providing quality education 
                  that serves as a strong foundation for students' future success. From our humble beginnings, 
                  we have been committed to academic excellence and character development.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Over the years, we have grown into a respected educational institution known for our 
                  comprehensive curriculum, dedicated faculty, and commitment to developing well-rounded 
                  students. Our graduates have gone on to excel in higher education and various professional 
                  fields, making positive contributions to their communities.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Today, we continue to build on our legacy of educational excellence, constantly improving 
                  our programs and facilities to provide the best possible learning environment for our students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our educational philosophy and daily operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-accent-lighter p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl text-primary">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We strive for the highest standards in education, ensuring our students receive 
                  quality instruction and develop strong academic foundations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-secondary-lighter p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl text-primary">Character Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in nurturing not just academic growth but also moral values, 
                  integrity, and responsible citizenship in all our students.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-primary-lighter p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We foster a supportive learning community where students, teachers, and 
                  families work together toward common educational goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;