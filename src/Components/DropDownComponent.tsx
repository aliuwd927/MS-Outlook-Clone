import { useState } from "react";
import { Dropdown, Button, CloseButton } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import shallow from "zustand/shallow";
import ModalComponent from "./ModalComponent";
import { modalStatus } from "./zustand";

export default function DropdownComponent() {
  //This is now global
  const { showModal, setShowModal } = modalStatus(
    (state) => ({
      showModal: state.show,
      setShowModal: state.setShow,
    }),
    shallow
  );

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
        <Dropdown.Item onClick={() => setShowModal(true)}>
          New Email
        </Dropdown.Item>
        <ModalComponent show={showModal} setShow={setShowModal} />
      </DropdownMenu>
    </Dropdown>
  );
}
