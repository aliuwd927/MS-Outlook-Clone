import { useContext } from "react";
import { EmailContext } from "./EmailContext";

export default function RightSection(){
  const EmailState = useContext(EmailContext);
  return (
    <div className="rightSection_Container">
      <p>{EmailState.nameOfSender}</p>
      <p>{EmailState.titleOfEmail}</p>
      <p>{EmailState.bodyMessage}</p>
    </div>
    )
}
