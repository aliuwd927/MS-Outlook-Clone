import { useState } from "react";
import { Dropdown, Navbar, Modal } from "react-bootstrap";
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
        <Dropdown.Toggle>
          <i className="fa fa-bars"></i>
        </Dropdown.Toggle>
        <DropdownMenu>
          <Dropdown.Item onClick={handleShow}>New Email</Dropdown.Item>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Dialog>
              <Modal.Header>I am Modal Head</Modal.Header>
            </Modal.Dialog>
          </Modal>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
}
