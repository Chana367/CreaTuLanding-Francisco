import { useState } from "react";
import { CartContext } from "./cartContext";
import AlertProblem from "../components/AlertProblem";

function CartProvider({ children }) {
  // TODO: Armar loader
  // TODO: Armar checkout
  // TODO: AGREGAR alert problem servers
  const [cart, setCart] = useState([]);
  const [showAlert, setShowAlert] = useState({title: "Ocurrió un error inesperado", message: "Refresca la página. Si no se soluciona, comunicate con el desarrollador", state: false});
  const closeAlert = () => setShowAlert(prev => ({ ...prev, state: false }));

  // add product in cart
  const addToCart = (product) => {
    if(!isInCart(product.id)){
      setCart([...cart, product])
    }else{
      console.error("El producto ya fue agregado al carrito")
      setShowAlert({title: "El producto ya fue agregado al carrito", message: "Por favor dirigete a la página del carrito para continuar", state:true});
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
      {showAlert.state && <AlertProblem title={showAlert.title} message={showAlert.message} onClose={closeAlert} ></AlertProblem>}
    </CartContext.Provider>
  );
}

export default CartProvider;
