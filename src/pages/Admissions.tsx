import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ClipboardList, FileText, UserCheck, Calendar, Mail, Phone, User, BookOpen } from "lucide-react";

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    gradeLevel: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailBody = `
New Admission Inquiry from Solid Rock Educational Complex Website:

Student Name: ${formData.studentName}
Parent/Guardian Name: ${formData.parentName}
Email: ${formData.email}
Phone: ${formData.phone}
Grade Level Interested In: ${formData.gradeLevel}

Additional Message:
${formData.message}
    `;
    
    // Create mailto link
    const subject = encodeURIComponent("Admission Inquiry - Solid Rock Educational Complex");
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:agyekumkwabena60@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Information Request Sent",
      description: "Your email client has been opened with your inquiry. Please send the email to complete your request.",
    });
    
    // Reset form
    setFormData({
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      gradeLevel: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-gradient-subtle py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">
              Admissions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join Solid Rock Educational Complex and start building a strong foundation for your future.
            </p>
          </div>
        </div>
      </section>
      
      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to begin your educational journey with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ClipboardList className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg text-primary">1. Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Submit your initial inquiry using our contact form or email us directly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg text-primary">2. Application</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Complete the full application with required documents and information.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-accent p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg text-primary">3. Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Our admissions team reviews your application and contacts you for next steps.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-primary-lighter p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">4. Enrollment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Upon acceptance, complete enrollment procedures and begin your educational journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
                Request More Information
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get in touch with you about admission requirements and next steps.
              </p>
            </div>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Admission Inquiry Form</CardTitle>
                <CardDescription className="text-center">
                  Please provide your information and we'll contact you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="studentName" className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-primary" />
                        <span>Student Name *</span>
                      </Label>
                      <Input
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Enter student's full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="parentName" className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-primary" />
                        <span>Parent/Guardian Name *</span>
                      </Label>
                      <Input
                        id="parentName"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        placeholder="Enter parent/guardian name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>Email Address *</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>Phone Number</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="gradeLevel" className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>Grade Level Interested In *</span>
                    </Label>
                    <select
                      id="gradeLevel"
                      name="gradeLevel"
                      value={formData.gradeLevel}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Select grade level</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 6">Grade 6</option>
                      <option value="Grade 7">Grade 7</option>
                      <option value="Grade 8">Grade 8</option>
                      <option value="Grade 9">Grade 9</option>
                      <option value="Grade 10">Grade 10</option>
                      <option value="Grade 11">Grade 11</option>
                      <option value="Grade 12">Grade 12</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your educational goals, any specific questions, or additional information you'd like to share..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Direct Contact</CardTitle>
                <CardDescription className="text-center">
                  You can also reach us directly through the following methods
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a 
                    href="mailto:agyekumkwabena60@gmail.com"
                    className="text-lg text-primary hover:text-primary-light transition-smooth"
                  >
                    agyekumkwabena60@gmail.com
                  </a>
                </div>
                <p className="text-muted-foreground">
                  For immediate questions about admissions, please email us directly and we'll respond as soon as possible.
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

export default Admissions;