import React from "react";
import { Form, Button } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";
export default function FormemailComponent(props: {
  show: boolean;
  setShow: any;
}) {
  function handleSetShow() {
    props.setShow();
  }

  function handleEmailData() {
    console.log();
  }
  return (
    <Form>
      <Form.Group>
        <DebounceInput
          type="email"
          placeholder="Email Sending To"
          debounceTimeout={1000}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <DebounceInput
          type="email"
          placeholder="Email Subject"
          debounceTimeout={300}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <DebounceInput
          as="textarea"
          rows={3}
          placeholder="Enter Email Body"
          debounceTimeout={300}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            console.log(event.target.value);
          }}
        />
      </Form.Group>
      <Button variant="secondary" onClick={handleSetShow}>
        Close{props.show}
      </Button>
      <Button
        variant="primary"
        type="submit"
        onClick={() => {
          handleEmailData();
        }}
      >
        Submit
      </Button>
    </Form>
  );
}

/*
  Form Control:
  Mimic Search Input State



   Submit:
   Take the Form Control State of the info we typed
   Send it to a emailStore state
   Sent it to a sentEmail State
   Reset Form Control State


*/
