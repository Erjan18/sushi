import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">SushiMaster</h2>
            <p className="text-gray-400 mb-4">
              Premium sushi and rolls crafted with care using only the freshest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/catalog" className="text-gray-400 hover:text-white transition-colors">Catalog</Link></li>
              <li><Link to="/favorites" className="text-gray-400 hover:text-white transition-colors">Favorites</Link></li>
              <li><Link to="/cart" className="text-gray-400 hover:text-white transition-colors">Cart</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog/rolls" className="text-gray-400 hover:text-white transition-colors">Classic Rolls</Link></li>
              <li><Link to="/catalog/speciality-rolls" className="text-gray-400 hover:text-white transition-colors">Specialty Rolls</Link></li>
              <li><Link to="/catalog/nigiri" className="text-gray-400 hover:text-white transition-colors">Nigiri</Link></li>
              <li><Link to="/catalog/sashimi" className="text-gray-400 hover:text-white transition-colors">Sashimi</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>123 Sushi Street</p>
              <p>Tokyo, Japan</p>
              <p className="mt-2">contact@sushimaster.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SushiMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;