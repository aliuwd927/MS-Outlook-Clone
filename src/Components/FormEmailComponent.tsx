import { Form, Button } from "react-bootstrap";
export default function FormemailComponent(props: {
  show: boolean;
  setShow: any;
}) {
  function handleSetShow() {
    props.setShow();
  }
  return (
    <Form>
      <Form.Group>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button variant="secondary" onClick={handleSetShow}>
        Close{props.show}
      </Button>
      <Button
        variant="primary"
        type="submit"
        onClick={() => {
          alert();
        }}
      >
        Submit
      </Button>
    </Form>
  );
}
