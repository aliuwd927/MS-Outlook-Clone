import React, { createContext, useReducer } from "react";


//An interface for our actions
export interface UpdateAction{
  type: 'update',
  data: {element:UpdateState}
}

//An interface for our state
export interface UpdateState {
  id: string,
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
  id:'',
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
      return action.data.element;
    }else{
      return state;
    }  
 }

export function EmailProvider({children}:PostProviderProps){
  const [emailState,dispatch] = useReducer(reducer, initialData); 
    return(
      <EmailContext.Provider value = {emailState}>
        <EmailDispatchContext.Provider value ={dispatch}>
          {children}
        </EmailDispatchContext.Provider>
      </EmailContext.Provider>
  )
}
 


/*

Type '{ current: { id: number; profilePicture: string; nameOfSender: string; titleOfEmail: string; bodyMessage: string; dateOfMessage: string; isAttachment: string; }; }' 
      is not assignable to type '{ element: UpdateState; }'.
  Object literal may only specify known properties, and 'current' does not exist in type '{ element: UpdateState; }'.ts(2322)
EmailContext.tsx(7, 3): The expected type comes from property 'data' which is declared here on type 'UpdateAction'

*/