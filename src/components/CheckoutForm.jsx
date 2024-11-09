import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CheckoutInput from "./CheckoutInput";

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
      <CheckoutInput controlId="formBasicText" label="Nombre" type="text" value={name} onChange={({ target }) => setName(target.value)}/>
      <CheckoutInput controlId="formBasicEmail" label="Email" type="email" value={email}  onChange={({ target }) => setEmail(target.value)}/>
      <CheckoutInput controlId="formBasicPhone" label="Teléfono" type="tel" value={phone}  onChange={({ target }) => setPhone(target.value)}/>
      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit">
          Confirmar
        </Button>
      </div>
    </Form>
  );
}

export default CheckoutForm;
