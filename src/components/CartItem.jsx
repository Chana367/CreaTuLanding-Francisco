import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from '../context/cartContext';

function CartItem(props) {
  const { removeFromCart } = useCart();

  return (
    <>
      <Card>
        <Card.Header>{props.marca}</Card.Header>
        <Card.Body className='d-flex justify-content-between align-items-center'>
          <Card.Img src={props.url_imagen} className='card-img-top mb-5 mb-md-0' style={{width:"200px"}}/>
          <Card.Title>{props.modelo}</Card.Title>
          <Card.Subtitle>Precio: ${props.precio.toLocaleString('Es-es')}</Card.Subtitle>
          <Card.Subtitle>Cantidad: ${props.quantity}</Card.Subtitle>
          <Button variant='none' onClick={() => removeFromCart(props.id)}>
            <FontAwesomeIcon icon={faTrash} style={{color: "red"}} />        
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default CartItem;