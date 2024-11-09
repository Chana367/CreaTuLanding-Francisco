import { useState } from "react";
import { CartContext } from "./cartContext";

function CartProvider({ children }) {
  // TODO: Armar checkout
  //TODO: ARMAR MARKDOWN
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

  const getTotal = () => {
    const precioOnly = cart.map(product => product.precio * product.quantity);
    const totalAmount = precioOnly.reduce((accumulator, price) => accumulator + price, 0)
    return totalAmount;
  }

  // check if product is in cart
  const isInCart = (productId) =>  cart.some(product => product.id === productId);
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getQuantity, isInCart, getTotal}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
