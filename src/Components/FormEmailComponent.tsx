import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";
import shallow from "zustand/shallow";
import { sentStore } from "./zustand";

export default function FormemailComponent(props: {
  show: boolean;
  setShow: any;
}) {
  const { sentStateArr, checkState } = sentStore(
    (state) => ({
      sentStateArr: state.setStateArray,
      checkState: state.sentStateArray,
    }),
    shallow
  );

  const [emailForm, setEmailForm] = useState({
    emailAddress: "",
    emailSubject: "",
    emailBody: "",
  });

  function handleEmailAddress(emailAddressValue: string) {
    if (emailAddressValue.length !== 0) {
      setEmailForm((prevState) => {
        return { ...prevState, emailAddress: emailAddressValue };
      });
    }
  }

  function handleEmailSubject(emailSubjectValue: string) {
    if (emailSubjectValue.length !== 0) {
      setEmailForm((prevState) => {
        return { ...prevState, emailSubject: emailSubjectValue };
      });
    }
  }

  function handleEmailBody(emailBodyValue: string) {
    if (emailBodyValue.length !== 0) {
      setEmailForm((prevState) => {
        return { ...prevState, emailBody: emailBodyValue };
      });
    }
  }

  //Modal Stuff
  function handleSetShow() {
    props.setShow();
  }

  function handleEmailData(event: React.MouseEvent<HTMLButtonElement>) {
    //Update State
    sentStateArr(emailForm);

    //RESET STATE ON SUBMIT
    setEmailForm({
      emailAddress: "",
      emailSubject: "",
      emailBody: "",
    });
    //Prevents Page from reseting
    event.preventDefault();
  }

  //ad0ran:  log (checkState) whenever checkState changes
  //keeps track of the array
  useEffect(() => {
    console.log(emailForm);
    console.log(checkState);
  }, [checkState, emailForm]);

  return (
    <Form>
      <Form.Group>
        <DebounceInput
          value={emailForm.emailAddress}
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
          value={emailForm.emailSubject}
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
          value={emailForm.emailBody}
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



  ad0ran:  https://codesandbox.io/s/pedantic-gould-4z6hk1?file=/src/App.tsx


  Look into changing Debounce
*/
