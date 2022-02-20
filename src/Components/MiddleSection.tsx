import emailObject from './emails.json';
import { useContext } from 'react';
import { EmailDispatchContext } from './EmailContext';
import { SearchBarInput } from './SearchBarInput';
const {v4: uuidv4} = require('uuid');


export interface EMail{
  profilePicture: string,
  nameOfSender:string,
  titleOfEmail:string,
  bodyMessage:string,
  dateOfMessage:string,
  isAttachment:string
}


export const InboxComponent = () =>{
  const dispatch = useContext(EmailDispatchContext)!;
  return(
    <div className="table_Container">
    
          {emailObject.map((element: EMail) =>{
            //create a variable that truncates a string of bodyMessage
            function truncate(input: string, len: number = 30): string {
              if (input.length <= len) {
                return input;
              } else {
                return input.substring(0, len) + '...';
              }
            }
            return(
              <div
              className="table_row_data" 
              key = {uuidv4()}
              onClick = {(e)=>{
                //console.log(uuidv4());
                dispatch({
                  type:'update',
                  data: {element}
                })
                //console.log(dispatch({type:'update',data: {element}}))
              }}
              >
                <div>{element.nameOfSender}</div>
                <div><strong>{truncate(element.titleOfEmail)}</strong></div>
                <div>{truncate(element.bodyMessage)}</div>
                {/* <td>{element.bodyMessage}</td> */}
             </div>
            )
          })}
    
    </div>
    )
   }

   export default function MiddleSection(){
  
    return (
      <div className="middleSection_Container">
        <SearchBarInput type='text' value='' placeholder='Search'/>
        <InboxComponent/>
      </div>
    )
  }