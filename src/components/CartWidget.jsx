import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { useCart } from "../context/cartContext";

function CartWidget (props) {
  const { getQuantity } = useCart();
  return (
    <>
      <Button className="btn position-relative" variant="link">
        <FontAwesomeIcon icon={faCartShopping} style={{color: props.color}} />        
        <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle mt-2 bg-danger rounded-circle" >
          {getQuantity()}
        </Badge>
      </Button>
    </>
  )
}

export default CartWidget