import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";
import { sentStore } from "./zustand";

export default function FormemailComponent(props: {
  show: boolean;
  setShow: any;
}) {
  const sentStateArr = sentStore((state) => state.setStateArray);
  const checkState = sentStore((state) => state.sentStateArray);
  const [emailAddress, setEmailAddress] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  function handleEmailAddress(emailAddressValue: string) {
    if (emailAddressValue) {
      setEmailAddress(emailAddressValue);
    }
  }

  function handleEmailSubject(emailSubjectValue: string) {
    if (emailSubjectValue) {
      setEmailSubject(emailSubjectValue);
    }
  }

  function handleEmailBody(emailBodyValue: string) {
    if (emailBodyValue) {
      setEmailBody(emailBodyValue);
    }
  }

  function handleSetShow() {
    props.setShow();
  }

  function handleEmailData(event: React.MouseEvent<HTMLButtonElement>) {
    sentStateArr([emailAddress, emailSubject, emailBody]);
    event.preventDefault();
    console.log(...checkState);
    //reset state AFTER handleEmailData is clicked.
  }

  return (
    <Form>
      <Form.Group>
        <DebounceInput
          type="email"
          placeholder="Email Sending To"
          debounceTimeout={1000}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleEmailAddress(event.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <DebounceInput
          element="input"
          rows="7"
          placeholder="Email Subject"
          debounceTimeout={1000}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleEmailSubject(event.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <DebounceInput
          element="textarea"
          cols="60"
          rows="7"
          placeholder="Enter Email Body"
          forceNotifyByEnter={false}
          debounceTimeout={1000}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleEmailBody(event.target.value);
          }}
        />
      </Form.Group>
      <Button variant="secondary" onClick={handleSetShow}>
        Close
      </Button>
      <Button
        variant="primary"
        type="submit"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          handleEmailData(event);
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
