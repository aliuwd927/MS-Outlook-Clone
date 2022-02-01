import emailObject from '../emails.json'

interface EMail{
  profilePicture: string,
  nameOfSender:string,
  titleOfEmail:string,
  bodyMessage:string,
  dateOfMessage:string,
  isAttachment:string,
}

function InboxComponent(){
return(
  <table className="table_Container">
    <tbody className="table_body">
      <tr className="table_row_data">
        {emailObject.map((element: EMail,index) =>{
          return(
            <div className="table_data_emailObj" >
              <td>{element.nameOfSender}</td>
              <td><strong>{element.titleOfEmail}</strong></td>
              <td>{element.bodyMessage}</td>
              <hr />
            </div>
          )
        })}
      </tr>
    </tbody>
  </table>
  )
 }

export default InboxComponent;