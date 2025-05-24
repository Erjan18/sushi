import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../data/categories';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';

const HomePage: React.FC = () => {
  // Filter out 'all' category
  const displayCategories = categories.filter(cat => cat.id !== 'all');
  
  // Get featured products (top rated ones)
  const featuredProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1148086/pexels-photo-1148086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Sushi assortment" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative container-custom py-24 md:py-32">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-lg animate-fade-in">
            Authentic Japanese Sushi &amp; Rolls
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-200 animate-slide-up">
            Discover our handcrafted selection of premium sushi made with the freshest ingredients
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up">
            <Link 
              to="/catalog" 
              className="btn btn-primary py-3 px-6"
            >
              Explore Menu
            </Link>
            <Link 
              to="/catalog" 
              className="btn btn-secondary py-3 px-6 bg-white/10 backdrop-blur-sm border-transparent hover:bg-white/20"
            >
              View Specials
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Categories</h2>
              <p className="text-gray-600 mt-2">Explore our wide variety of sushi options</p>
            </div>
            <Link to="/catalog" className="btn btn-secondary flex items-center">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayCategories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Top Rated</h2>
              <p className="text-gray-600 mt-2">Our customers' favorite selections</p>
            </div>
            <Link to="/catalog" className="btn btn-secondary flex items-center">
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/8951999/pexels-photo-8951999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sushi chef preparing sushi" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                At SushiMaster, we're passionate about bringing the authentic flavors of Japan to your table. Our experienced chefs use only the freshest ingredients, preparing each dish with meticulous attention to detail and respect for traditional techniques.
              </p>
              <p className="text-gray-600 mb-6">
                We take pride in serving sushi that not only delights your taste buds but also provides a genuine Japanese culinary experience. From classic rolls to specialty creations, every item on our menu is crafted to perfection.
              </p>
              <Link to="/catalog" className="btn btn-primary">
                Explore Our Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;