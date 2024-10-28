import { useState } from "react";
import { CartContext } from "./cartContext";

function CartProvider({ children }) {
  //TODO: delete product al carrito
  // TODO: Armar loader
  const [cart, setCart] = useState([]);

  // add product in cart
  const addToCart = (product) => {
    if(!isInCart(product.id)){
      setCart([...cart, product])
    }else{
      console.error("El producto ya fue agregado al carrito")
    }
  };

  // delete product in cart
  const removeFromCart = (productId) => {
    const cartUpdated = cart.filter(prod => prod.id !== productId)
    setCart(cartUpdated);
  }

  //clear cart
  const clearCart = () => setCart([]);
  
  // cant in cart
  const getQuantity = () => {
    const qtyOnly = cart.map(product => product.quantity);
    const total = qtyOnly.reduce((accumulator, quantity) => accumulator + quantity, 0)
    return total;
  }

  // check if product is in cart
  const isInCart = (productId) =>  cart.some(product => product.id === productId);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getQuantity, isInCart}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
