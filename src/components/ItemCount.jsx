import { useState } from "react";

function ItemCount ({ stock, initial, onAdd}) {
  const [count, setCount] = useState(initial)

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
          onClick={() => onAdd(count)} 
          disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount;