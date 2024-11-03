import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { getProducts, getProductsByCategName } from "../firebase/db"

function ItemListContainer () {
  const [products, setProducts] = useState([])
  const { categoryName } = useParams()
  const title = categoryName ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1) : "Todos nuestros vehiculos"

  useEffect(() => {
    const consulta = categoryName ? getProductsByCategName(categoryName) : getProducts()
    consulta
      .then(response=> {
        console.log("Response: " + response)
        setProducts(response)
      })
      .catch(error=> {
        console.error(error)
      })
  }, [categoryName])

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center py-3">{title}</h1>
        <ItemList products={products} />
      </div>
    </>
  )
}

export default ItemListContainer