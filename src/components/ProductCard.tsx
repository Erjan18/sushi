import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Flame, Leaf } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(product.id);

  return (
    <div className="card group animate-fade-in">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button 
            onClick={() => toggleFavorite(product)}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              className={`h-5 w-5 ${favorited ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} 
            />
          </button>
        </div>
        {(product.isSpicy || product.isVegetarian) && (
          <div className="absolute top-2 left-2 flex gap-1">
            {product.isSpicy && (
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <Flame size={12} className="mr-1" /> Spicy
              </span>
            )}
            {product.isVegetarian && (
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <Leaf size={12} className="mr-1" /> Veg
              </span>
            )}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-medium hover:text-red-700 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-medium text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          
          <button 
            onClick={() => addToCart(product)}
            className="inline-flex items-center justify-center p-2 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;