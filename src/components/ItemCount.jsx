import { useState } from "react";
import { useCart } from "../context/cartContext";
function ItemCount ({ stock, initial, detail}) {
  const [count, setCount] = useState(initial)
  const { addToCart, isInCart } = useCart();
  const handleIncrement = () => {
    if (count < stock){
      setCount(count + 1)
    }
  }
  const handleDecrement = () =>{
    if (count > 1){
      setCount(count - 1)
    }
  } 

  //add cart
  const handleAddToCart = () => addToCart({...detail, quantity: count})


  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex align-items-center mb-3">
        <button className="btn btn-outline-primary" onClick={handleDecrement}>
          -
        </button>
        <span className="mx-3">{count}</span>
        <button className="btn btn-outline-primary" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div>
        <button 
          className="btn btn-success" 
          onClick={handleAddToCart} 
          disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount;