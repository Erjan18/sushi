export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ingredients: string[];
  weight: number;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  rating: number;
}

export type Category = {
  id: string;
  name: string;
  description?: string;
  image?: string;
};

export type SortOption = 'price-asc' | 'price-desc' | 'rating' | 'name-asc' | 'name-desc';