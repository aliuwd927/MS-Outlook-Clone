import { draftStore, modalStatus, valueInputField } from "./zustand";
import ModalComponent from "./ModalComponent";
import React, { useState } from "react";
import shallow from "zustand/shallow";

//Type '{}' is missing the following properties from type '{ show: boolean; setShow: any; }': show, setShow

export default function DraftEmailComponent() {
  const draftState = draftStore((state) => state.draftStateArray);
  const inputFieldValue = valueInputField((state) => state.setElementId);

  const { showModal, setShowModal } = modalStatus(
    (state) => ({
      showModal: state.show,
      setShowModal: state.setShow,
    }),
    shallow
  );

  const [showDraftModal, setShowDraftModal] = useState(false);

  function showTargetedDraftModal() {
    setShowDraftModal(!showDraftModal);
    setShowModal(true);
  }

  //Figure out a way to use element ID, pass it for formEmail Componenet.
  //State CANNOT be an array. Must only take one in Element iD a time.
  //Our Modal will block us from clicking other drafts ,so no need to worry.

  function sendElementId(chkElId: string) {
    inputFieldValue(chkElId);
  }

  return (
    <React.Fragment>
      {showDraftModal && (
        <ModalComponent show={showModal} setShow={setShowModal} />
      )}

      <div>
        {draftState.map((element) => {
          return (
            <div
              onClick={() => {
                showTargetedDraftModal();
                sendElementId(element.id);
              }}
            >
              <div>{element.id}</div>
              <div>{element.nameOfSender}</div>
              <div>{element.titleOfEmail}</div>
              <div>{element.bodyMessage}</div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}
/*
Change modal local state to global --- Done.
When we click on it -- Done.
Modal pops open --- Done.
 <div onClick={()=> <ModalComponent show={showModal} setShow={setShowModal} /> }>

Fill out presaved items 
3 buttons Save Send Close
When we hit save we update that particular element 
When we hit send we delete from stack, and send it to sendEmailComponent
When we hit close, nothing saves / happens,modal just closes

*/
