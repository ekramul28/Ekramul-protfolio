import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul>
              <li className="mb-2">
                <strong>Phone:</strong> +8801762477828
              </li>
              <li className="mb-2">
                <strong>Email:</strong> mdekramulhassan168@gmail.com
              </li>
              <li className="mb-2">
                <strong>Location:</strong> jessore,Dakha,Bangladesh
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#about" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="hover:text-blue-400">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="hover:text-blue-400">
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/ekramulhassan28"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl hover:text-blue-600" />
              </a>
              <a
                href="https://twitter.com/@ekramul_28"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </a>
              <a
                href="https://instagram.com/ekramul_28"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/ekramul57"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-2xl hover:text-blue-700" />
              </a>
              <a
                href="https://github.com/ekramul28"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-600 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ekramul. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
