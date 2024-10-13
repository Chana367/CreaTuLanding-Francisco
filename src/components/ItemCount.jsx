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
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <div>
        <button onClick={() => onAdd(count)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount;