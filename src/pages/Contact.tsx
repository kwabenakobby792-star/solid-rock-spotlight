import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailBody = `
New Contact Form Submission from Solid Rock Educational Complex Website:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `;
    
    // Create mailto link
    const subject = encodeURIComponent(`Contact Form: ${formData.subject || 'General Inquiry'}`);
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:agyekumkwabena60@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Prepared",
      description: "Your email client has been opened with your message. Please send the email to reach us.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get in touch with our team for information, support, or to schedule a visit.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-primary">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Send us an email for any inquiries or information requests.
                </p>
                <a 
                  href="mailto:agyekumkwabena60@gmail.com"
                  className="text-primary hover:text-primary-light transition-smooth font-medium"
                >
                  agyekumkwabena60@gmail.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-secondary p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-xl text-primary">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Contact us via email to receive our phone number for direct communication.
                </p>
                <p className="text-primary font-medium">
                  Phone available upon contact
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-card transition-smooth">
              <CardHeader>
                <div className="bg-accent p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl text-primary">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Schedule a visit to tour our facilities and meet our team.
                </p>
                <p className="text-primary font-medium">
                  Location details provided upon contact
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
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary text-center">Contact Form</CardTitle>
                <CardDescription className="text-center">
                  We'd love to hear from you. Send us a message and we'll respond promptly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-primary" />
                        <span>Full Name *</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
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
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="flex items-center space-x-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span>Subject *</span>
                      </Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Admissions Information">Admissions Information</option>
                        <option value="Academic Programs">Academic Programs</option>
                        <option value="Schedule a Visit">Schedule a Visit</option>
                        <option value="Support">Support</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry, questions, or how we can help you..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Additional Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="bg-gradient-accent p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Office Hours & Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-primary mb-2">Response Time</h3>
                  <p className="text-muted-foreground">
                    We typically respond to all inquiries within 24-48 hours during business days.
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-primary mb-2">School Visits</h3>
                  <p className="text-muted-foreground">
                    We welcome prospective students and families to visit our campus. 
                    Please contact us to schedule a tour and meet with our admissions team.
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-primary mb-2">Emergency Contact</h3>
                  <p className="text-muted-foreground">
                    For urgent matters regarding current students, please email us directly 
                    and mark your message as urgent.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;