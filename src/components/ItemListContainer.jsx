import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "./ItemList"

function ItemListContainer (props) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(response=> {
        setProducts(response)
      })
      .catch(error=> {
        console.error(error)
      })

  }, [])

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center py-3">¡Bienvenido {props.nombre} a Pelucars!</h1>
        <ItemList products={products} />
      </div>
    </>
  )
}

export default ItemListContainer