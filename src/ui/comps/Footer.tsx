import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import visa from "@/assets/payments/visa.svg";
import mastercard from "@/assets/payments/mastercard.svg";
import paypal from "@/assets/payments/paypal.svg";

function Footer() {
  return (
    <footer className="bg-primary text-white py-10 px-6 md:px-12 bottom-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm sm:text-base">
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">StoreWeb</h2>
          <p className="text-gray-200">
            Your go-to store for the latest tech devices. Trusted by thousands across the country.
          </p>
          <p className="text-gray-300">&copy; {new Date().getFullYear()} StoreWeb. All rights reserved.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/products" className="hover:text-gray-300">Products</a></li>
            <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact & Social */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="flex items-start gap-2 text-gray-200">
            <MapPin className="w-5 h-5 mt-1" />
            <p>123 Tech Avenue, Algiers, Algeria</p>
          </div>
          <div className="flex items-center gap-2 text-gray-200">
            <Phone className="w-5 h-5" />
            <a href="tel:+213123456789" className="hover:text-gray-300">+213 123 456 789</a>
          </div>
          <div className="flex items-center gap-2 text-gray-200">
            <Mail className="w-5 h-5" />
            <a href="mailto:support@storeweb.com" className="hover:text-gray-300">support@storeweb.com</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gray-300"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-gray-300"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-8 border-t border-white/10 pt-6 text-center">
        <p className="mb-2 text-gray-300">We accept</p>
        <div className="flex justify-center items-center gap-4">
          <img src={visa} alt="Visa" className="h-6" color="white"/>
          <img src={mastercard} alt="MasterCard" className="h-6" color="white"/>
          <img src={paypal} alt="PayPal" className="h-6" color="white"/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
