import { serverTimestamp } from "firebase/firestore";
import { useCart } from "../context/cartContext";
import CheckoutForm from "./CheckoutForm";
import { createOrder } from "../firebase/db";
import { useState } from "react";

function Checkout() {
  const { cart, clearCart, getTotal } = useCart();
  const [orderId, setOrderId] = useState("");

  const handleSubmit = async ({ name, phone, email }) => {
    if (cart.length > 0) {
      const order = {
        buyer: { name, phone, email },
        items: cart,
        total: getTotal(),
        date: serverTimestamp(),
      };

      setOrderId(await createOrder(order));
      clearCart();
    } else {
      console.error("No tienes productos en el carrito");
    }
  };

  if (orderId) {
    return (
      <>
        <h1 className="d-flex justify-content-center text-center mt-3">
          Tu orden fue creada con éxito! Número de orden: {orderId}
        </h1>
        <Button className="btn btn-primary" as={Link} to="/">
          Volver al Inicio
        </Button>
      </>
    );
  }

  return (
    <div className="p-5">
      <h1 className="d-flex justify-content-center">Checkout</h1>
      <CheckoutForm onConfirm={handleSubmit} />
    </div>
  );
}

export default Checkout;
