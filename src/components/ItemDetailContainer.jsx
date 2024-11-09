import { useEffect, useState } from "react"
import { getProductById } from "../firebase/db"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import Loading from "./Loading"
const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    getProductById(id)
      .then(response => {
        setProduct(response)
      })
      .catch(error => {
        console.error('Error obteniendo el auto:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [id])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <ItemDetail {...product} />
        </div>
      )}
    </>
  )
}

export default ItemDetailContainer