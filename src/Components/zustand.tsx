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
  emailDispatch:any,
  emailDispatchReset:any,
  }

  export interface SearchBarInput{
    searchState:string,
    searchDispatch:any,
  }
  
//rightSectionDispath
 export const rightSectionDispatch = create<UpdateState>((set)=>({
   id:'',
   profilePicture:'',
   nameOfSender:'',
   titleOfEmail:'',
   bodyMessage:'',
   dateOfMessage:'',
   isAttachment:'',
   emailDispatch:(current:UpdateState)=>set(()=>({
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