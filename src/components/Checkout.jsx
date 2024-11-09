import { serverTimestamp } from "firebase/firestore";
import { useCart } from "../context/cartContext";
import CheckoutForm from "./CheckoutForm";
import { createOrder } from "../firebase/db";

function Checkout() {
  const { cart, clearCart, getTotal } = useCart();

  const handleSubmit = async ({ name, phone, email }) => {
    if(cart.length > 0) {
      const order = {
        buyer: { name, phone, email },
        items: cart,
        total: getTotal(),
        date: serverTimestamp()
      };
      
      createOrder(order)
      clearCart()
    }else{
      console.error("No tienes productos en el carrito")
    }
  };
  return (
    <div className="p-5">
      <h1 className="d-flex justify-content-center">Checkout</h1>
      <CheckoutForm onConfirm={handleSubmit} />
    </div>
  );
}

export default Checkout;
