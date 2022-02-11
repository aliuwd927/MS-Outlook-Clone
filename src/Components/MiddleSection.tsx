import emailObject from './emails.json';

interface EMail{
  profilePicture: string,
  nameOfSender:string,
  titleOfEmail:string,
  bodyMessage:string,
  dateOfMessage:string,
  isAttachment:string,
}

export default function MiddleSection(){
  return (
    <div className="middleSection_Container">
      <InboxComponent />
    </div>
  )
}


function InboxComponent(){
  return(
    <table className="table_Container">
      <tbody className="table_body">
        <tr className="table_row_data">
          {emailObject.map((element: EMail,index) =>{
            return(
             <EmailMsg element={element}/>
            )
          })}
        </tr>
      </tbody>
    </table>
    )
   }
  
   
   function EmailMsg(props: {element: EMail}){
     return(
      <div className="table_data_emailObj" >
        <td>{props.element.nameOfSender}</td>
        <td><strong>{props.element.titleOfEmail}</strong></td>
        <td>{props.element.bodyMessage}</td>
        <hr />
      </div>
     )
   }

