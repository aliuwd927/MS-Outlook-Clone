import { draftStore, modalStatus } from "./zustand";
import ModalComponent from "./ModalComponent";
import React, { useState } from "react";
import shallow from "zustand/shallow";

//Type '{}' is missing the following properties from type '{ show: boolean; setShow: any; }': show, setShow

export default function DraftEmailComponent() {
  const draftState = draftStore((state) => state.draftStateArray);

  const { showModal, setShowModal } = modalStatus(
    (state) => ({
      showModal: state.show,
      setShowModal: state.setShow,
    }),
    shallow
  );

  const [showDraftModal, setShowDraftModal] = useState(false);

  function showTargetedDraftModal(testId: string) {
    setShowDraftModal(!showDraftModal);
    setShowModal(true);
    console.log(testId);
  }

  //Figure out a way to use element ID, pass it for formEmail Componenet.

  return (
    <React.Fragment>
      {showDraftModal && (
        <ModalComponent show={showModal} setShow={setShowModal} />
      )}

      <div>
        {draftState.map((element) => {
          return (
            <div onClick={() => showTargetedDraftModal(element.id)}>
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
