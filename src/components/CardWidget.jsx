import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";


function CardWidget (props) {
  return (
    <>
      <Button className="btn position-relative" variant="link">
        <FontAwesomeIcon icon={faCartShopping} style={{color: props.color}} />        
        <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle mt-2 m bg-danger rounded-circle" >
          {props.cant}
        </Badge>
      </Button>
    </>
  )
}

export default CardWidget