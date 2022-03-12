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

  }

 export const righSectionDispatch = create<UpdateState>((set)=>({
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
   }))
  
 }))


 export interface SearchBarInput{
  searchState:string,
  searchDispatch:any,
  test:any,
}

export const useStore = create<SearchBarInput>((set,get)=>({
searchState:'',
searchDispatch:(input:string)=>set(()=>({
  searchState: input,
})),
test:()=>console.log(get().searchState)
}))