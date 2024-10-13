import { Col, Container, Row } from "react-bootstrap"
import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <Container>

      <Row>
        {products.map(prod =>(
          <Col key={prod.id}>
            <Item  {...prod} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ItemList