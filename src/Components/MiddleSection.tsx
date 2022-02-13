
import emailObject from './emails.json';
import RightSection from './RightSection';
const {v4: uuidv4} = require('uuid');


export interface EMail{
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
          {emailObject.map((element: EMail) =>{
            return(
              <tr
              className="table_row_data" 
              key = {uuidv4()}
              onClick= {()=>{
                //console.log(uuidv4());
                /*
                 Step 1: 
                
                 */
              }}
              >
                <td>{element.nameOfSender}</td>
                <td><strong>{element.titleOfEmail}</strong></td>
                <td>{element.bodyMessage}</td>
             </tr>
            )
          })}
      </tbody>
    </table>
    )
   }

   //TODO:

  /*
    Lift state up 
    Have right section render item, based on UUID



    dispatch


   useContext







  */