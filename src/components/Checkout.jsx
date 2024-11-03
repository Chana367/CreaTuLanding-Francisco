import { serverTimestamp, Timestamp } from "firebase/firestore";
import { useCart } from "../context/cartContext";
import CheckoutForm from "./CheckoutForm";

function Checkout() {
  const { cart, clearCart, getTotal } = useCart();

  const createOrder = async ({ name, phone, email }) => {
    const order = {
      buyer: { name, phone, email },
      items: cart,
      total: getTotal,
      date: serverTimestamp()
    };
    console.log("Checkout created " + name + " " + phone + " " + email);
  };
  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
}

export default Checkout;
