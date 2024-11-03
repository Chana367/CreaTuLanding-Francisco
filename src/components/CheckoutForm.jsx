import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CheckoutForm({ onConfirm }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      email,
      phone,
    };

    onConfirm(userData);
  };

  return (
    <Form onSubmit={handleConfirm}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su nombre"
          value={name}
          required
          onChange={({ target }) => setName(target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email: </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          required
          onChange={({ target }) => setEmail(target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Teléfono: </Form.Label>
        <Form.Control
          type="tel"
          placeholder="Ingrese su teléfono"
          value={phone}
          required
          onChange={({ target }) => setPhone(target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Confirmar
      </Button>
    </Form>
  );
}

export default CheckoutForm;
