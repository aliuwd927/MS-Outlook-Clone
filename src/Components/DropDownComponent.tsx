import { useState } from "react";
import { Dropdown, Button, CloseButton } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import ModalComponent from "./ModalComponent";

export default function DropdownComponent() {
  const [show, setShow] = useState(false);

  function handleModalShow() {
    setShow(!show);
  }

  return (
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
        <Dropdown.Item onClick={handleModalShow}>New Email</Dropdown.Item>
        <ModalComponent show={show} setShow={handleModalShow} />
      </DropdownMenu>
    </Dropdown>
  );
}
