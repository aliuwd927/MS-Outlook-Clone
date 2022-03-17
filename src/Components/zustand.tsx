import create from 'zustand';

//An interface for our state
export interface UpdateState {
  id: string,
  profilePicture: string,
  nameOfSender:string,
  titleOfEmail:string,
  bodyMessage:string,
  dateOfMessage:string,
  isAttachment:string,
  }

  export interface Actions {
  emailDispatch:(current:UpdateState)=>void,
  emailDispatchReset:()=>void,
  }

  export interface SearchBarInput{
    searchState:string,
    searchDispatch:any,
  }

  export interface DeleteMapping{

  }
  
//RightSecond Email Dispatch Updating State
 export const rightSectionDispatch = create<UpdateState & Actions>((set)=>({
   id:'',
   profilePicture:'',
   nameOfSender:'',
   titleOfEmail:'',
   bodyMessage:'',
   dateOfMessage:'',
   isAttachment:'',
   emailDispatch:(current)=>set(()=>({
    id: current.id,
    profilePicture: current.profilePicture,
    nameOfSender: current.nameOfSender,
    titleOfEmail: current.titleOfEmail,
    bodyMessage: current.bodyMessage,
    dateOfMessage: current.dateOfMessage,
    isAttachment: current.isAttachment,
   })),
   emailDispatchReset: ()=>set(({
    id:'',
    profilePicture:'',
    nameOfSender:'',
    titleOfEmail:'',
    bodyMessage:'',
    dateOfMessage:'',
    isAttachment:'',
   }))

 }))

//useStore
export const useStore = create<SearchBarInput>((set,get)=>({
searchState:'',
searchDispatch:(input:string)=>set(()=>({
  searchState: input,
  }))


}))

export const delMapping = create<DeleteMapping>((set,get)=>({
// Lifting Delete State Up
  deleteState: '',
}))
