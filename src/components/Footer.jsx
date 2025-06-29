import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
            <footer className="bg-gray-100 text-gray-700 pt-12 pb-6 mt-12 border-t border-gray-200">

    {/* <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-16 font-poppins"> */}
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4">

        {/* Logo & Description */}
        <div>
          <a href="#">
            <img
              src="https://www.bmw.co.id/content/dam/bmw/common/images/logo-icons/BMW/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.SVG"
              alt="BMW Logo"
              className="h-12 mb-4"
            />
          </a>
          <p className="text-sm leading-relaxed text-gray-500">
            Experience the premium performance and elegant design of BMW. Innovation, luxury, and passion all in one drive.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#produk" className="hover:text-blue-400">Products</a></li>
            <li><a href="#about" className="hover:text-blue-400">About BMW</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1" />
              <span>BMW Indonesia HQ, Jakarta</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+62 21 1234 5678</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>support@bmw.co.id</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-300">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-800">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BMW Group Indonesia. All rights reserved.
      </div>
    </footer>
  );
}
