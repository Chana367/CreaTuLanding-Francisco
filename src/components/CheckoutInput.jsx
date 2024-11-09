import Form from "react-bootstrap/Form";

function CheckoutInput({ label, type, value, onChange, controlId }) {
  return (
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}: </Form.Label>
        <Form.Control
          type={type}
          placeholder={`Ingrese su ${label.toLowerCase()}`}
          value={value}
          required
          onChange={onChange}
        />
      </Form.Group>
  );
}

export default CheckoutInput;
