import { Category } from '../types';

export const categories: Category[] = [
  {
    id: "all",
    name: "All Items",
    description: "Browse our complete selection of sushi and rolls"
  },
  {
    id: "rolls",
    name: "Classic Rolls",
    description: "Traditional sushi rolls with various fillings",
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "speciality-rolls",
    name: "Specialty Rolls",
    description: "Premium signature rolls with unique combinations",
    image: "https://www.sushinine.com/wp-content/uploads/2017/10/Reddragon.jpg"
  },
  {
    id: "nigiri",
    name: "Nigiri",
    description: "Fresh fish slices on hand-pressed rice",
    image: "https://images.pexels.com/photos/8951563/pexels-photo-8951563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "sashimi",
    name: "Sashimi",
    description: "Thinly sliced raw fish served with wasabi and ginger",
    image: "https://images.pexels.com/photos/5900850/pexels-photo-5900850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export default categories;