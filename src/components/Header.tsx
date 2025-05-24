import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Heart, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../contexts/CartContext';
import { categories } from '../data/categories';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-red-700">SushiMaster</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-700 transition-colors">
              {t('common.home')}
            </Link>
            <Link to="/catalog" className="text-gray-700 hover:text-red-700 transition-colors">
              {t('common.catalog')}
            </Link>
            <div className="group relative">
              <button className="text-gray-700 hover:text-red-700 transition-colors flex items-center">
                {t('common.categories')}
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/catalog/${category.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link to="/search" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Search className="h-5 w-5 text-gray-700" />
            </Link>
            <Link to="/favorites" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Heart className="h-5 w-5 text-gray-700" />
            </Link>
            <Link to="/cart" className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <LanguageSwitcher />
            <Link to="/cart" className="p-2 mr-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-red-700">
              {t('common.home')}
            </Link>
            <Link to="/catalog" className="block py-2 text-gray-700 hover:text-red-700">
              {t('common.catalog')}
            </Link>
            <div className="py-2">
              <p className="text-sm font-medium text-gray-500 mb-2">{t('common.categories')}</p>
              <div className="pl-4 space-y-2">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/catalog/${category.id}`}
                    className="block py-1 text-gray-700 hover:text-red-700"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/search" className="block py-2 text-gray-700 hover:text-red-700">
              {t('common.search')}
            </Link>
            <Link to="/favorites" className="block py-2 text-gray-700 hover:text-red-700">
              {t('common.favorites')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;