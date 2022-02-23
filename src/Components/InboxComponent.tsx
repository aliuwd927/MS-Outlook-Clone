import emailObject from './emails.json';
import { useContext } from 'react';
import { EmailDispatchContext } from './EmailContext';
const {v4: uuidv4} = require('uuid');


export interface EMail{
  profilePicture: string,
  nameOfSender:string,
  titleOfEmail:string,
  bodyMessage:string,
  dateOfMessage:string,
  isAttachment:string
}


export const InboxComponent = (props: {searchBarValue:string}) =>{
  const dispatch = useContext(EmailDispatchContext)!;
  const {searchBarValue} = props;
  return(
    <div className="table_Container">
          {emailObject
      .filter((element: EMail) => {
        //This below code below works bc the includes returns true / false value and keeps the true value.
        return element.bodyMessage.toLocaleLowerCase().includes(searchBarValue.toLocaleLowerCase());
        })
      .map((element: EMail) =>{
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
                dispatch({
                  type:'update',
                  data: {element}
                })
              }}
              >
                <div>{element.nameOfSender}</div>
                <div><strong>{truncate(element.titleOfEmail)}</strong></div>
                <div>{truncate(element.bodyMessage)}</div>
             </div>
            )
          })
    }
    </div>
    )
   }





/*
      Get Rid Of Filter and Map, use Reduce Method
{

[].reduce((output, item) => { return output }, {})


{

{emailObject.reduce<string[]>((previousValue,currentValue)=>{
            console.log([...previousValue,currentValue])
            return [...previousValue, currentValue.titleOfEmail]
          },[])
    }

*/































/*

THIS IS BACK UP IF WE FUCK THIS UP. DONT FUCK IT UP. 

export const InboxComponent = (props: {searchBarValue:string}) =>{
  const dispatch = useContext(EmailDispatchContext)!;
  const {searchBarValue} = props;
  return(
    <div className="table_Container">
          {emailObject
      .filter((element: EMail) => {
        //This below code below works bc the includes returns true / false value and keeps the true value.
        return element.bodyMessage.toLocaleLowerCase().includes(searchBarValue.toLocaleLowerCase());
        })
      .map((element: EMail) =>{
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
                dispatch({
                  type:'update',
                  data: {element}
                })
              }}
              >
                <div>{element.nameOfSender}</div>
                <div><strong>{truncate(element.titleOfEmail)}</strong></div>
                <div>{truncate(element.bodyMessage)}</div>
             </div>
            )
          })
    }
    </div>
    )
   }












*/












/*

--- Old Code To Revert Back To If Something Goes Terribly Wrong ---

export const InboxComponent = (props: {searchBarValue:string}) =>{
  const dispatch = useContext(EmailDispatchContext)!;

  return(
    <div className="table_Container">
          {emailObject.map((element: EMail) =>{
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
                dispatch({
                  type:'update',
                  data: {element}
                })
              }}
              >
                <div>{element.nameOfSender}</div>
                <div><strong>{truncate(element.titleOfEmail)}</strong></div>
                <div>{truncate(element.bodyMessage)}</div>
             </div>
            )
          })}
    </div>
    )
   }

*/