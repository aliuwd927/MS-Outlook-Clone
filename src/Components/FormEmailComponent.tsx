import React, { FormEventHandler, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";
import shallow from "zustand/shallow";
import { sentStore, UpdateState } from "./zustand";

interface LocalEmail {
  emailAddress: string;
  emailSubject: string;
  emailBody: string;
}

interface formDataEmail {
  dataEmail: string;
  dataSubject: string;
  dataEmailBody: string;
}

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

  const emailInitalState = {
    emailAddress: "",
    emailSubject: "",
    emailBody: "",
  };

  const emailInitalErrorState = { ...emailInitalState };

  const [emailForm, setEmailForm] = useState(emailInitalState);
  const [emailError, setEmailError] = useState(emailInitalErrorState);

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

  //This returns error if any
  const formValidator = (data: Partial<formDataEmail>) => {
    const dataArr = data;
    const isEmpty = Object.keys(dataArr).some((element) => {
      /*
        Key: Value
        If the value of the key has a Value in it, it will be true
        however, bc we need to know if the element is empty,
        we inverted that so that way, if there is a value, that key
        is NOT empty, we it needs to return false.

        If the key HAS an empty, it needs to return TRUE so that way
        we know THAT key is EMPTY.

        Key: '' --> Equate to True
        Key: 'Value' --> Equate that to False

        NORMALLY
        !!value = True
        !!NOVALUE = False
      */
      return !(dataArr as any)[element];
    });

    console.log(isEmpty);
    //return isEmpty
    // https://www.positronx.io/react-form-validation-tutorial-with-example/
    // Just in case you need to continue
    // Please also use ad0ran typed solution to learn
    // https://codesandbox.io/s/relaxed-leavitt-9cz3xg?file=/src/App.tsx
    // Please also use micheaaa type solution to learn
    // https://stackblitz.com/edit/react-ts-yr283a?file=index.tsx

    //use regex to check

    //make sure length is > 0
    //Loop thru Obj Key:Value
    //Check if value.length > 0 && some regex stuff to match
    //if all 3 items pass, then trigger sentStateArr(emailForm)
  };

  function handleEmailData(event: React.FormEvent<HTMLFormElement>) {
    //Prevents Page from reseting
    event.preventDefault();
    const emailRegEx = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);

    //newFormData creates a new obj
    const dataTargeted = new FormData(event.currentTarget);
    //get Method allows us retrieves attributes based by the DOM Node
    //These essentilly grabbing keys which contains values in them
    const dataEmail = dataTargeted.get("emailAddress")?.toString().trim();
    const dataSubject = dataTargeted.get("emailSubject")?.toString().trim();
    const dataEmailBody = dataTargeted.get("emailBody")?.toString().trim();
    console.log(dataTargeted);
    //bundle into obj to send to formValidator
    //bundled so we can also iterate objects
    const values = { dataEmail, dataSubject, dataEmailBody };
    //returns error values
    //error is either true / false
    //if true, trigger  setFormError and end else submit state
    const errors = formValidator(values);

    //Chk for error
    //if(errors)
    //setFormErrors(errors)

    //if no errors
    //setEmailForm(values)

    //Update State
    sentStateArr(emailForm);

    //RESET STATE ON SUBMIT
    setEmailForm({
      emailAddress: "",
      emailSubject: "",
      emailBody: "",
    });
  }

  //ad0ran:  log (checkState) whenever checkState changes
  //keeps track of the array
  // useEffect(() => {
  //   console.log(emailForm);
  //   console.log(checkState);
  //   //Test Unit to Check if emailForm copying to emailError
  //   console.log(emailError);
  // }, [checkState, emailForm, emailError]);

  return (
    <Form noValidate onSubmit={handleEmailData}>
      <Form.Group>
        <DebounceInput
          value={emailForm.emailAddress}
          type="email"
          placeholder="Email Sending To"
          debounceTimeout={1000}
          name="emailAddress"
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
          name="emailSubject"
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
          name="emailBody"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleEmailBody(event.target.value);
          }}
        />
      </Form.Group>
      <Button variant="secondary" onClick={handleSetShow}>
        Close
      </Button>
      <Button variant="primary" type="submit">
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
