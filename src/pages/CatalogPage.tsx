import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Filter } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { Product, SortOption } from '../types';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';

const CatalogPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('rating');
  const [dietaryFilters, setDietaryFilters] = useState({
    isVegetarian: false,
    isSpicy: false,
  });
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 50,
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Set price range based on product prices
  useEffect(() => {
    const prices = products.map(p => p.price);
    const minPrice = Math.floor(Math.min(...prices));
    const maxPrice = Math.ceil(Math.max(...prices));
    setPriceRange({ min: minPrice, max: maxPrice });
  }, []);

  // Filter products whenever any filter changes
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (category && category !== 'all') {
      result = result.filter(product => product.category === category);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query) ||
          product.ingredients.some(i => i.toLowerCase().includes(query))
      );
    }
    
    // Filter by dietary preferences
    if (dietaryFilters.isVegetarian) {
      result = result.filter(product => product.isVegetarian);
    }
    
    if (dietaryFilters.isSpicy) {
      result = result.filter(product => product.isSpicy);
    }
    
    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    // Sort products
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating':
      default:
        result.sort((a, b) => b.rating - a.rating);
        break;
    }
    
    setFilteredProducts(result);
  }, [category, searchQuery, dietaryFilters, priceRange, sortOption]);

  // Get current category info
  const currentCategory = categories.find(c => c.id === category) || categories[0];

  return (
    <div className="py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{currentCategory.name}</h1>
          {currentCategory.description && (
            <p className="text-gray-600">{currentCategory.description}</p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <Filters
              onSort={setSortOption}
              onFilter={setDietaryFilters}
              onPriceRange={setPriceRange}
              priceRange={priceRange}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <SearchBar
                onSearch={setSearchQuery}
                className="flex-1"
              />
              
              {/* Mobile filter button */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="btn btn-secondary flex items-center justify-center lg:hidden"
              >
                <Filter size={18} className="mr-2" />
                Filters
              </button>
            </div>

            {/* Mobile Filters */}
            {isFilterOpen && (
              <div className="lg:hidden mb-6">
                <Filters
                  onSort={setSortOption}
                  onFilter={setDietaryFilters}
                  onPriceRange={setPriceRange}
                  priceRange={priceRange}
                />
              </div>
            )}

            {/* Results */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;