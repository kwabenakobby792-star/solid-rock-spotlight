import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-secondary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Solid Rock Educational Complex</h3>
                <p className="text-sm text-primary-foreground/80">Building Strong Foundations</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 mb-4">
              Committed to providing quality education and developing future leaders with strong academic foundations and character development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-secondary transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <a 
                  href="mailto:agyekumkwabena60@gmail.com" 
                  className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm"
                >
                  agyekumkwabena60@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">
                  Contact for phone number
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">
                  Location details available upon contact
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} Solid Rock Educational Complex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;