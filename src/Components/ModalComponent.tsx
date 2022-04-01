import { Modal } from "react-bootstrap";

import FormemailComponent from "./FormEmailComponent";
export default function ModalComponent(props: { show: boolean; setShow: any }) {
  return (
    <Modal show={props.show}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Enter Email Stuff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormemailComponent show={props.show} setShow={props.setShow} />
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
}

