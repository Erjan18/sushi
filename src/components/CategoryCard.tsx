import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/catalog/${category.id}`}
      className="group relative block overflow-hidden rounded-lg shadow-md transition-transform hover:-translate-y-1"
    >
      {category.image ? (
        <img
          src={category.image}
          alt={category.name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">{category.name}</span>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
        <h3 className="text-xl font-medium">{category.name}</h3>
        {category.description && (
          <p className="text-sm text-gray-200 mt-1">{category.description}</p>
        )}
      </div>
    </Link>
  );
};

export default CategoryCard;