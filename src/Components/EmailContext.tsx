import React, { createContext, useReducer } from "react";


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

interface PostProviderProps {
  children: React.ReactNode
}

const initialData:UpdateState = {
  profilePicture: '',
  nameOfSender: '',
  titleOfEmail: '',
  bodyMessage: '',
  dateOfMessage: '',
  isAttachment: ''
 };

export const EmailContext = createContext(initialData);
export const EmailDispatchContext = createContext<React.Dispatch< UpdateAction> | null > (null);

 export default function reducer(state: UpdateState,action: UpdateAction){
    if( action.type === 'update' ){
      //console.log(action.data.element.bodyMessage)
      return action.data.element;
    }else{
      return state;
    }
  
 }

export function EmailProvider({children}:PostProviderProps){
  const [emailState,dispatch] = useReducer(reducer, initialData);

  //console.log({children})
   
  return(
    <EmailContext.Provider value = {emailState}>
      <EmailDispatchContext.Provider value ={dispatch}>
        {children}
      </EmailDispatchContext.Provider>
    </EmailContext.Provider>

  )
}
 


