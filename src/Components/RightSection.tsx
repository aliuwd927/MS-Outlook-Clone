import { UpdateState } from "../App"


export default function RightSection(props: {emailState:UpdateState}){
  const {bodyMessage,nameOfSender,titleOfEmail} = props.emailState;
  return (
    <div className="rightSection_Container">
      <p>{nameOfSender}</p>
      <p>{titleOfEmail}</p>
      <p>{bodyMessage}</p>
    </div>
    )
}
