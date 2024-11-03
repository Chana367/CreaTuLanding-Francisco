import Alert from "react-bootstrap/Alert";

function AlertProblem(props) {
  return (
    <>
      <Alert variant="danger" onClose={props.onClose} dismissible>
        <Alert.Heading>{props.title}</Alert.Heading>
        <p>{props.message}</p>
      </Alert>
    </>
  );
}

export default AlertProblem;
