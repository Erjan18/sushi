import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavorites } from '../contexts/FavoritesContext';
import ProductCard from '../components/ProductCard';

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="max-w-md mx-auto">
          <Heart size={64} className="mx-auto text-gray-400 mb-6" />
          <h1 className="text-2xl font-bold mb-4">Your favorites list is empty</h1>
          <p className="text-gray-600 mb-8">
            You haven't added any items to your favorites yet.
          </p>
          <Link to="/catalog" className="btn btn-primary">
            Browse Catalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favorites.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;