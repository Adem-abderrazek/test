"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold  text-primary mb-4">Game Hub</h2>
            <p className="text-gray-400">Game Hub is an online learning community with thousands of classes in design, business, tech, and more. Anyone can join the millions of members in our community to learn cutting-edge skills, network with peers and discover new opportunities.</p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Partnerships</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Affiliates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Accessibility</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1 flex items-center justify-center md:justify-end">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faYoutube} size="lg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
