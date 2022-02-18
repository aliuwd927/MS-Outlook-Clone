import { createContext } from "react";
import {useReducer} from 'react';

//An interface for our actions
export interface UpdateAction{
  type: 'update',
  data: {element:UpdateState}
}

//An interface for our state
export interface UpdateState {
  profilePicture: string,
  nameOfSender:string,
  titleOfEmail:string,
  bodyMessage:string,
  dateOfMessage:string,
  isAttachment:string
}

const initialData:UpdateState = {
  profilePicture: '',
  nameOfSender: '',
  titleOfEmail: '',
  bodyMessage: '',
  dateOfMessage: '',
  isAttachment: ''
 };

 export default function reducer(state: UpdateState,action: UpdateAction){
  if( action.type === 'update' ){
    console.log(action.data.element.bodyMessage)
    return action.data.element;
  }else{
    return state;
  }
  
 }


export const EmailContext = createContext(initialData);
export const EmailDispatchContext = createContext(null);