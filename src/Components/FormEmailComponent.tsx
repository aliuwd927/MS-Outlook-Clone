import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { DebounceInput } from "react-debounce-input";
import shallow from "zustand/shallow";
import { sentStore, draftStore, ModalAction, valueInputField } from "./zustand";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

interface LocalEmail {
  nameOfSender: string;
  titleOfEmail: string;
  bodyMessage: string;
}

type L = keyof LocalEmail;

function usePageViews() {
  let location = useLocation();
  if (location.pathname === "/draftPage") return true;
}

export default function FormemailComponent(props: ModalAction) {
  const { sentStateArr, checkState } = sentStore(
    (state) => ({
      sentStateArr: state.setStateArray,
      checkState: state.sentStateArray,
    }),
    shallow
  );

  //const draftStoreArr = draftStore((state) => state.setDraftStateArray);
  //const draftState = draftStore((state) => state.draftStateArray);

  const { draftStoreArr, draftState } = draftStore(
    (state) => ({
      draftStoreArr: state.setDraftStateArray,
      draftState: state.draftStateArray,
    }),
    shallow
  );
  const { chkElementId, restSetElementId } = valueInputField((state) => ({
    chkElementId: state.id,
    restSetElementId: state.setElementId,
  }));

  //Email Inital State
  const emailInitalState = {
    nameOfSender: "",
    titleOfEmail: "",
    bodyMessage: "",
  };
  //Copies for Email Error and Email Draft
  const emailInitalErrorState = { ...emailInitalState };
  const emailInitalDraft = { ...emailInitalState };

  //Local UseState
  const [emailForm, setEmailForm] = useState(emailInitalState);
  const [emailError, setEmailError] = useState(emailInitalErrorState);
  const [emailDraft, setEmailDraft] = useState(emailInitalDraft);

  let checkPage = usePageViews();
  //console.log(checkPage);

  //Sends State to Zustand State Management
  function handleEmailAddress(emailAddressValue: string) {
    if (emailAddressValue.length !== 0) {
      setEmailForm((prevState) => {
        return { ...prevState, nameOfSender: emailAddressValue };
      });
    }
  }

  function handleEmailSubject(emailSubjectValue: string) {
    if (emailSubjectValue.length !== 0) {
      setEmailForm((prevState) => {
        return { ...prevState, titleOfEmail: emailSubjectValue };
      });
    }
  }

  function handleEmailBody(emailBodyValue: string) {
    if (emailBodyValue.length !== 0) {
      setEmailForm((prevState) => {
        return { ...prevState, bodyMessage: emailBodyValue };
      });
    }
  }

  //Modal Stuff
  function handleSetShow() {
    props.setShow(false);
  }

  //Reset State for Draft to Render.
  function handleResetDraftRender() {
    restSetElementId("");
  }

  //const draftState = draftStore((state) => state.draftStateArray);

  function valueNameOfSender() {
    //this pulls from element id
    //
    //console.log(draftState);
    //uses another State mgt, to match draftState and return the draftState Values.

    //Iterate draftState
    //use chkElementId
    //if chkElementId === draftState.id
    //return that item
    const valueOfSender = draftState.find((element) => {
      if (element.id === chkElementId) {
        return element.nameOfSender;
      } else {
        return null;
      }
    });
    return valueOfSender?.nameOfSender;
  }

  function valueTitleOfEmail() {
    //this pulls from element id
    //
    const valueOfTitle = draftState.find((element) => {
      if (element.id === chkElementId) {
        return element;
      } else {
        return null;
      }
    });
    return valueOfTitle?.titleOfEmail;
  }

  function valueBodyOfMessage() {
    //this pulls from element id
    //
    const valueOfBody = draftState.find((element) => {
      if (element.id === chkElementId) {
        return element;
      } else {
        return null;
      }
    });
    return valueOfBody?.bodyMessage;
  }

  //This returns errors object and will be used in handleEmailData to update errorState
  const formValidator = (data: Partial<LocalEmail>) => {
    const emailRegEx = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    //Why does this need to be true?
    //True to check validity of the form to ensure all fields are typed
    //False meaning there is a empty field somewhere
    //Return the error if false to update emailErrorState
    let valid = true;
    /*
      We need to return errors obj, to update the emailError State
      We do it locally, and then return it formValidator as object values
      By doing so, we can update the state together or as needed.
    */
    let errors = { ...emailInitalState };
    if (data.nameOfSender && emailRegEx.test(data.nameOfSender)) {
      console.log("Valid Email Address");
    } else {
      errors.nameOfSender = "Invalid Email";
      valid = false;
    }
    for (const [key, value] of Object.entries(data)) {
      /*
      THESE ARE THE FUCKING SAME LMAO
      They call upon the value of the data object
      console.log(value);
      console.log(data[key as L]);
      */

      /*
        Key: Value
        If the value of the key has a Value in it, it will be true
        however, bc we need to know if the element is empty,
        we inverted it, so that way, if there is a value, that key
        is NOT empty and we need to return false instead of true.

        If the key HAS an empty value, it needs to return TRUE so that way
        we know THAT key is EMPTY.

        Key: '' --> Equate to True
        Key: 'Value' --> Equate that to False

        NORMALLY
        !!value = True
        !!NOVALUE = False
      */

      //We set this variable to hold a boolean instead of a value itself
      const isPropValueEmpty = !value;

      //Informs us if any properties are empty.
      //True = property value is empty
      if (isPropValueEmpty) {
        errors[key as L] = `${key} field is empty`;
        //console.log(errors[key as L]);
        //set false to notify use there is an empty field which is an error.
        valid = false;
      }
    }
    //if false, return us the errors
    if (!valid) {
      return errors;
    }
  };

  //Save Draft
  function handleSaveDraft() {
    /*
      Because of onChange event, it will store in emailForm.
      Before we submit to sentStateArry, it MUST be checked thru form validator
      In this case we don't have to worry about fields, but for good practice,
      we must make sure the user fills out all information before saving, just so they better remember.

    */
    const errors = formValidator({ ...emailForm });
    //console.log(errors);
    console.log(!!errors);
    //By setting this to false, it lets us know all fields are filled
    // When True, it means that emptyFields are indeed empty
    if (!errors) {
      //Set state to emailDraft and send to draftState in Zustand
      draftStoreArr({
        id: uuidv4(),
        profilePicture: "",
        nameOfSender: emailForm.nameOfSender,
        titleOfEmail: emailForm.titleOfEmail,
        bodyMessage: emailForm.bodyMessage,
        dateOfMessage: "",
        isAttachment: "",
      });
      handleSetShow();
    } else if (errors) {
      //Updates Draft State based of previous DraftStateStore.
      //use chkElementId to update THAT specific draft.
      //using chkElmentId create a function that updates each field.
      console.log(draftState);
      console.log(chkElementId);
      draftState.forEach((elements, index) => {
        console.log(typeof elements.id);
        console.log(elements.id === chkElementId);
        console.log(index);
        if (elements.id === chkElementId) {
          // console.log(elements.bodyMessage);
          // console.log((elements.bodyMessage = emailForm.bodyMessage));
          // console.log(elements.bodyMessage);
          //draftStore sets the array
          //draftState is an Array
          //Both belong to DraftStore Object in Zustand
          console.log(draftState[index]);
          draftState.splice(index, 1);
          console.log(draftState);
          draftStoreArr({
            id: elements.id,
            profilePicture: "",
            nameOfSender: emailForm.nameOfSender,
            titleOfEmail: emailForm.titleOfEmail,
            bodyMessage: emailForm.bodyMessage,
            dateOfMessage: "",
            isAttachment: "",
          });
        }
      });
    } else {
      return;
    }
  }

  function updateDraft() {
    console.log();
  }

  //Handle Email Data, when Form Submits
  function handleEmailData(event: React.FormEvent<HTMLFormElement>) {
    //Prevents Page from reseting
    event.preventDefault();

    //newFormData creates a new obj
    const dataTargeted = new FormData(event.currentTarget);
    //get Method allows us retrieves attributes based by the DOM Node
    //These essentilly grabbing keys which contains values in them
    const nameOfSender = dataTargeted.get("nameOfSender")?.toString().trim();
    const titleOfEmail = dataTargeted.get("titleOfEmail")?.toString().trim();
    const bodyMessage = dataTargeted.get("bodyMessage")?.toString().trim();

    //bundle into obj to send to formValidator
    //bundled so we can also iterate objects
    const values = { nameOfSender, titleOfEmail, bodyMessage };

    const errors = formValidator(values);

    if (errors) {
      setEmailError(errors);
      //Ends functino Early
      return;
    } else {
      //Reset State for Email Error
      setEmailError({
        nameOfSender: "",
        titleOfEmail: "",
        bodyMessage: "",
      });
    }

    /*
      Render this style conditionally
      https://react-bootstrap.netlify.app/forms/validation/
    */

    //Update State
    sentStateArr({
      id: uuidv4(),
      profilePicture: "",
      nameOfSender: emailForm.nameOfSender,
      titleOfEmail: emailForm.titleOfEmail,
      bodyMessage: emailForm.bodyMessage,
      dateOfMessage: "",
      isAttachment: "",
    });

    //RESET STATE ON SUBMIT
    setEmailForm({
      nameOfSender: "",
      titleOfEmail: "",
      bodyMessage: "",
    });
  }

  //ad0ran:  log (checkState) whenever checkState changes
  //keeps track of the array
  useEffect(() => {
    // console.log(emailForm);
    //console.log(checkState);
    //Test Unit to Check if emailForm copying to emailError
    //console.log(emailError);
    console.log(emailDraft);
  }, [checkState, emailForm, emailError, emailDraft]);

  return (
    <Form noValidate onSubmit={handleEmailData}>
      <Form.Group>
        <DebounceInput
          value={checkPage ? valueNameOfSender() : ""}
          type="email"
          placeholder="Email Sending To"
          debounceTimeout={1000}
          name="nameOfSender"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleEmailAddress(event.target.value);
          }}
        />
        <br />
        <span>{emailError.nameOfSender}</span>
      </Form.Group>
      <Form.Group>
        <DebounceInput
          value={checkPage ? valueTitleOfEmail() : ""}
          element="input"
          rows="7"
          placeholder="Email Subject"
          debounceTimeout={1000}
          name="titleOfEmail"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleEmailSubject(event.target.value);
          }}
        />
        <br />
        <span>{emailError.titleOfEmail}</span>
      </Form.Group>
      <Form.Group>
        <DebounceInput
          value={checkPage ? valueBodyOfMessage() : ""}
          element="textarea"
          cols="60"
          rows="7"
          placeholder="Enter Email Body"
          forceNotifyByEnter={false}
          debounceTimeout={1000}
          name="bodyMessage"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleEmailBody(event.target.value);
          }}
        />
        <br />
        <span>{emailError.bodyMessage}</span>
      </Form.Group>
      <Button
        variant="secondary"
        onClick={() => {
          handleSetShow();
          handleResetDraftRender();
        }}
      >
        Close
      </Button>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="warning" onClick={handleSaveDraft}>
        Save to drafts
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

// Legacy Code
//Return us True / False
// Object.keys(data).forEach((element) => {
//   /*
//     Key: Value
//     If the value of the key has a Value in it, it will be true
//     however, bc we need to know if the element is empty,
//     we inverted that so that way, if there is a value, that key
//     is NOT empty, we it needs to return false.

//     If the key HAS an empty, it needs to return TRUE so that way
//     we know THAT key is EMPTY.

//     Key: '' --> Equate to True
//     Key: 'Value' --> Equate that to False

//     NORMALLY
//     !!value = True
//     !!NOVALUE = False
//   */
//   //We set this variable to hold a boolean instead of a value
//   // const isPropValueEmpty = !data[element as keyof LocalEmail];
//   /*

//   */
//   //Informs us if any properties are empty
//   // if (isPropValueEmpty) {
//   errors[element as keyof LocalEmail] = `${element} field is empty`;
//   //   console.log(errors[element as keyof LocalEmail]);
//   //   console.log(errors);
//   //   valid = false;
//   // }
// });

// console.log(isEmpty);
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

/*

  check to see if in draftPage
  if in draft page, check the draftArray
  onClick populate modal pre fill from draftArray








  import * as React from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();

  React.useEffect(() => {
    ga('send', 'pageview');
  }, [location]);

  return (
    // ...
  );
}



 */

/*
 draftState.map((elements) => {
        console.log(typeof elements.id);
        console.log(elements.id === chkElementId);
        if (elements.id === chkElementId) {
          console.log(elements.bodyMessage);
          console.log((elements.bodyMessage = emailForm.bodyMessage));
          console.log(elements.bodyMessage);
        }
      });

*/
