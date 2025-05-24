import React from 'react';
import { Trash, Minus, Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  const increaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="flex items-center py-4 border-b">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{item.name}</h3>
          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500 line-clamp-1">{item.description}</p>

        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex items-center border rounded-md">
            <button
              onClick={decreaseQuantity}
              className="p-1 text-gray-500 hover:text-red-500"
            >
              <Minus size={16} />
            </button>
            <span className="px-2 py-1 text-gray-700">{item.quantity}</span>
            <button
              onClick={increaseQuantity}
              className="p-1 text-gray-500 hover:text-red-500"
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="font-medium text-red-600 hover:text-red-800 flex items-center"
          >
            <Trash size={16} className="mr-1" /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;