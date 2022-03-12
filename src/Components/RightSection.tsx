import {rightSectionDispatch} from './zustand';

export default function RightSection(){
  const {nameOfSender, titleOfEmail,bodyMessage} = rightSectionDispatch(state =>state)
  return (
    <div className="rightSection_Container">
      <p>{nameOfSender}</p>
      <p>{titleOfEmail}</p>
      <p>{bodyMessage}</p>
    </div>
    )
}
