import React, { FunctionComponent } from 'react';
import emailObject from './emails.json';
const {v4: uuidv4} = require('uuid');


export interface EMail{
  profilePicture: string,
  nameOfSender:string,
  titleOfEmail:string,
  bodyMessage:string,
  dateOfMessage:string,
  isAttachment:string
}

export default function MiddleSection(props: {dispatch:React.Dispatch<any>}){
  return (
    <div className="middleSection_Container">
      <InboxComponent dispatch = {props.dispatch} />
    </div>
  )
}


function InboxComponent(props:{dispatch:React.Dispatch<any>}){
  return(
    <table className="table_Container">
      <tbody className="table_body">
          {emailObject.map((element: EMail) =>{
            return(
              <tr
              className="table_row_data" 
              key = {uuidv4()}
              onClick= {(e)=>{
                //console.log(uuidv4());
                props.dispatch({
                  type:'update',
                  data: {element}
                })
                console.log(
                  props.dispatch({
                    type:'update',
                    data: {element}
                  })
                )
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