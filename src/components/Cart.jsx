import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import Button from "react-bootstrap/Button"
import CartItem from "./CartItem";

function Cart() {
  const { cart, clearCart, getQuantity, getTotal } = useCart();

  if (getQuantity() === 0) {
    return (
      <div className="py-4">
        <h1 className="d-flex justify-content-center">No hay productos en el carrito.</h1>
        <div className="d-flex justify-content-center mt-3">
          <Button className="btn btn-primary" as={Link} to="/">
            Productos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      { cart.map(p => <CartItem key={p.id} {...p} />)}
      <h3 className="d-flex justify-content-center mt-3">Total: ${getTotal()}</h3>
      <div className="d-flex justify-content-around mt-3">
        <Button className="btn btn-primary" onClick={() => clearCart()}>Limpiar Carrito</Button>
        <Button className="btn btn-success" as={Link} to='/checkout'>Comprar</Button>
      </div>
    </div>
  );
}

export default Cart;
