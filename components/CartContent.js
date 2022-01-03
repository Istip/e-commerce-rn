import { createContext, useState } from 'react';
import { getProduct } from '../services/productService';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  // Adding item to the cart
  const addItemToCart = (id) => {
    const product = getProduct(id);

    setItems((pervItems) => {
      const item = pervItems.find((item) => item.id === id);

      if (!item) {
        return [
          ...pervItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return pervItems.map((item) => {
          if (item.id === id) {
            item.qty++;
            item.totalPrice += product.price;
          }

          return item;
        });
      }
    });
  };

  // Get the quantity of the item
  const getItemsCount = () => {
    return items.reduce((sum, item) => sum + item.qty, 0);
  };

  // Calculate the total price
  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        addItemToCart,
        getItemsCount,
        getTotalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
