import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { SortOption } from '../types';

interface FiltersProps {
  onSort: (sortOption: SortOption) => void;
  onFilter: (filters: { isVegetarian?: boolean; isSpicy?: boolean }) => void;
  onPriceRange: (range: { min: number; max: number }) => void;
  priceRange: { min: number; max: number };
  className?: string;
}

const Filters: React.FC<FiltersProps> = ({
  onSort,
  onFilter,
  onPriceRange,
  priceRange,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isSpicy, setIsSpicy] = useState(false);
  const [minPrice, setMinPrice] = useState(priceRange.min);
  const [maxPrice, setMaxPrice] = useState(priceRange.max);
  const [sortOption, setSortOption] = useState<SortOption>('rating');

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    onSort(option);
  };

  const handleFilterChange = (type: 'vegetarian' | 'spicy') => {
    if (type === 'vegetarian') {
      setIsVegetarian(!isVegetarian);
      onFilter({ isVegetarian: !isVegetarian, isSpicy });
    } else {
      setIsSpicy(!isSpicy);
      onFilter({ isVegetarian, isSpicy: !isSpicy });
    }
  };

  const handlePriceChange = () => {
    onPriceRange({ min: minPrice, max: maxPrice });
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border p-4 ${className}`}>
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <h3 className="font-medium">Filters & Sorting</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </div>

      {isOpen && (
        <div className="mt-4 space-y-6">
          {/* Sorting */}
          <div>
            <h4 className="text-sm font-medium mb-2">Sort By</h4>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleSortChange('price-asc')}
                className={`btn ${sortOption === 'price-asc' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Price: Low to High
              </button>
              <button
                onClick={() => handleSortChange('price-desc')}
                className={`btn ${sortOption === 'price-desc' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Price: High to Low
              </button>
              <button
                onClick={() => handleSortChange('rating')}
                className={`btn ${sortOption === 'rating' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Highest Rated
              </button>
              <button
                onClick={() => handleSortChange('name-asc')}
                className={`btn ${sortOption === 'name-asc' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Name (A-Z)
              </button>
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="text-sm font-medium mb-2">Price Range</h4>
            <div className="flex items-center gap-2">
              <div className="w-1/2">
                <label className="text-xs text-gray-500">Min</label>
                <input
                  type="number"
                  min={0}
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="input"
                />
              </div>
              <div className="w-1/2">
                <label className="text-xs text-gray-500">Max</label>
                <input
                  type="number"
                  min={minPrice}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="input"
                />
              </div>
            </div>
            <button
              onClick={handlePriceChange}
              className="btn btn-primary w-full mt-2"
            >
              Apply Price Filter
            </button>
          </div>

          {/* Other Filters */}
          <div>
            <h4 className="text-sm font-medium mb-2">Dietary Preferences</h4>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isVegetarian}
                  onChange={() => handleFilterChange('vegetarian')}
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <span>Vegetarian</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isSpicy}
                  onChange={() => handleFilterChange('spicy')}
                  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <span>Spicy</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;