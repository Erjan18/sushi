import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "California Roll",
    description: "A classic roll with crab, avocado, and cucumber, wrapped in seaweed and rice.",
    price: 8.99,
    image: "https://images.pexels.com/photos/9609839/pexels-photo-9609839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "rolls",
    ingredients: ["Crab meat", "Avocado", "Cucumber", "Rice", "Seaweed", "Sesame seeds"],
    weight: 180,
    rating: 4.8
  },
  {
    id: 2,
    name: "Salmon Nigiri",
    description: "Fresh salmon slices on hand-pressed rice.",
    price: 6.99,
    image: "https://images.pexels.com/photos/8951563/pexels-photo-8951563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "nigiri",
    ingredients: ["Salmon", "Rice", "Wasabi"],
    weight: 80,
    rating: 4.9
  },
  {
    id: 3,
    name: "Spicy Tuna Roll",
    description: "Spicy tuna with cucumber and avocado, wrapped in seaweed and rice.",
    price: 9.99,
    image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "rolls",
    ingredients: ["Tuna", "Spicy mayo", "Cucumber", "Avocado", "Rice", "Seaweed"],
    weight: 200,
    isSpicy: true,
    rating: 4.7
  },
  {
    id: 4,
    name: "Dragon Roll",
    description: "Tempura shrimp roll topped with avocado and eel sauce.",
    price: 12.99,
    image: "https://www.sushinine.com/wp-content/uploads/2017/10/Reddragon.jpg",
    category: "speciality-rolls",
    ingredients: ["Shrimp tempura", "Avocado", "Cucumber", "Eel sauce", "Rice", "Seaweed"],
    weight: 250,
    rating: 4.9
  },
  {
    id: 5,
    name: "Vegetable Roll",
    description: "Fresh vegetables wrapped in seaweed and rice.",
    price: 7.99,
    image: "https://images.pexels.com/photos/5900824/pexels-photo-5900824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "rolls",
    ingredients: ["Cucumber", "Avocado", "Carrot", "Bell pepper", "Rice", "Seaweed"],
    weight: 180,
    isVegetarian: true,
    rating: 4.5
  },
  {
    id: 6,
    name: "Tuna Sashimi",
    description: "Thinly sliced raw tuna served with wasabi and ginger.",
    price: 11.99,
    image: "https://images.pexels.com/photos/5900850/pexels-photo-5900850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "sashimi",
    ingredients: ["Tuna", "Wasabi", "Ginger"],
    weight: 120,
    rating: 4.8
  },
  {
    id: 7,
    name: "Rainbow Roll",
    description: "California roll topped with various slices of fish and avocado.",
    price: 13.99,
    image: "https://www.sushinine.com/wp-content/uploads/2017/10/Reddragon.jpg",
    category: "speciality-rolls",
    ingredients: ["Crab", "Cucumber", "Avocado", "Tuna", "Salmon", "Yellowtail", "Rice", "Seaweed"],
    weight: 230,
    rating: 4.9
  },
  {
    id: 8,
    name: "Shrimp Tempura Roll",
    description: "Crispy shrimp tempura rolled with cucumber and avocado.",
    price: 10.99,
    image: "https://images.pexels.com/photos/9609851/pexels-photo-9609851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "rolls",
    ingredients: ["Shrimp tempura", "Cucumber", "Avocado", "Rice", "Seaweed"],
    weight: 210,
    rating: 4.6
  },
  {
    id: 9,
    name: "Eel Nigiri",
    description: "Grilled freshwater eel on hand-pressed rice.",
    price: 7.99,
    image: "https://images.pexels.com/photos/8951561/pexels-photo-8951561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "nigiri",
    ingredients: ["Eel", "Rice", "Eel sauce"],
    weight: 90,
    rating: 4.7
  },
  {
    id: 10,
    name: "Tamago Nigiri",
    description: "Sweet Japanese omelette on hand-pressed rice.",
    price: 5.99,
    image: "https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "nigiri",
    ingredients: ["Egg", "Sugar", "Rice"],
    weight: 85,
    isVegetarian: true,
    rating: 4.5
  },
  {
    id: 11,
    name: "Philadelphia Roll",
    description: "Smoked salmon, cream cheese, and cucumber roll.",
    price: 9.99,
    image: "https://images.pexels.com/photos/9224300/pexels-photo-9224300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "rolls",
    ingredients: ["Smoked salmon", "Cream cheese", "Cucumber", "Rice", "Seaweed"],
    weight: 190,
    rating: 4.7
  },
  {
    id: 12,
    name: "Salmon Sashimi",
    description: "Thinly sliced raw salmon served with wasabi and ginger.",
    price: 12.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWAyOhkm4Domozj0mS-zfH1gTYkW_N1yNEg&s",
    category: "sashimi",
    ingredients: ["Salmon", "Wasabi", "Ginger"],
    weight: 130,
    rating: 4.9
  }
];

export default products;