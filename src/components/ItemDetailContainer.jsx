import { useEffect, useState } from "react"
import { getProductById } from "../firebase/db"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() =>{
    getProductById(id)
      .then(response => {
        setProduct(response)
      })
      .catch(error => {
        console.error('Error obteniendo el auto:', error)
      })
  }, [id])

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer