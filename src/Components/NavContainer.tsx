import { useState } from "react";
import {
  Dropdown,
  Navbar,
  Modal,
  Form,
  Button,
  CloseButton,
} from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

export default function NavContainer() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <Navbar>
      <Dropdown>
        <div className="nav_Buttons">
          <Dropdown.Toggle>
            <i className="fa fa-bars"></i>
          </Dropdown.Toggle>
          <Button variant="danger">
            <CloseButton disabled />
          </Button>
        </div>

        <DropdownMenu>
          <Dropdown.Item onClick={handleShow}>New Email</Dropdown.Item>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Enter Email Stuff</Modal.Title>
              </Modal.Header>
              <Modal.Body>
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
                  <Button variant="secondary" onClick={handleClose}>
                    Close
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
              </Modal.Body>
            </Modal.Dialog>
          </Modal>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
}
