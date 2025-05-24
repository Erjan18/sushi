import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, ChevronLeft, Star } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import ProductCard from '../components/ProductCard';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  
  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products (same category, excluding current)
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        
        setRelatedProducts(related);
      }
    }
    
    // Reset quantity when product changes
    setQuantity(1);
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!product) {
    return (
      <div className="container-custom py-12 text-center">
        <h2 className="text-2xl font-medium">Product not found</h2>
        <Link to="/catalog" className="btn btn-primary mt-4">
          Back to Catalog
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const favorited = isFavorite(product.id);
  
  return (
    <div className="py-8">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/catalog" className="flex items-center text-sm text-gray-600 hover:text-red-700">
            <ChevronLeft size={16} className="mr-1" /> Back to Catalog
          </Link>
        </div>
        
        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
              
              {/* Price and Rating */}
              <div className="flex items-center justify-between my-4">
                <div className="text-2xl font-bold text-red-700">${product.price.toFixed(2)}</div>
                <div className="flex items-center text-sm">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${i < Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Properties */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-sm">
                  <span className="text-gray-500">Weight:</span> {product.weight}g
                </div>
                {product.isSpicy && (
                  <div className="text-sm text-red-600">Spicy</div>
                )}
                {product.isVegetarian && (
                  <div className="text-sm text-green-600">Vegetarian</div>
                )}
              </div>
              
              {/* Ingredients */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                    className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center py-1 border-t border-b border-gray-300"
                  />
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex gap-4 mt-auto">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 btn btn-primary py-3"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button 
                  onClick={() => toggleFavorite(product)}
                  className="btn btn-secondary py-3 px-4"
                  aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart 
                    size={18} 
                    className={favorited ? 'fill-red-500 text-red-500' : ''} 
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;