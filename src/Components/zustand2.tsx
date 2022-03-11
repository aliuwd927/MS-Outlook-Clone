import create from 'zustand';


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