import { draftStore } from "./zustand";
import ModalComponent from "./ModalComponent";

//Type '{}' is missing the following properties from type '{ show: boolean; setShow: any; }': show, setShow

export default function DraftEmailComponent() {
  const draftState = draftStore((state) => state.draftStateArray);
  console.log(draftState);

  return (
    <div>
      {draftState.map((element, index) => {
        console.log(element, index);
        return (
          <div>
            <div>{element.nameOfSender}</div>
            <div>{element.titleOfEmail}</div>
            <div>{element.bodyMessage}</div>
          </div>
        );
      })}
    </div>
  );
}
/*
When we click on it
Modal pops open
Fill out presaved items
3 buttons Save Send Close
When we hit save we update that particular element 
When we hit send we delete from stack, and send it to sendEmailComponent
When we hit close, nothing saves / happens,modal just closes


*/
