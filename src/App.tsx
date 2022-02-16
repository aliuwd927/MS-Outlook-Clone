import './App.css';
import LeftSection from './Components/LeftSection';
import MiddleSection from './Components/MiddleSection';
import RightSection from './Components/RightSection';
import { useReducer } from 'react';


//An interface for our actions
interface UpdateAction{
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

export default function App() {
  //do not do this. instead pass data. it is far safer.
 const initialData:UpdateState = {
  profilePicture: '',
  nameOfSender: '',
  titleOfEmail: '',
  bodyMessage: '',
  dateOfMessage: '',
  isAttachment: ''
 };

 function reducer(state: UpdateState,action: UpdateAction){
  if( action.type === 'update' ){
    console.log(action.data.element.bodyMessage)
    return action.data.element
  }else{
    return state
  }
  
 }

 const [emailState,dispatch] = useReducer(reducer, initialData) 

  return (
    <div className="App">
      <LeftSection />
      <MiddleSection dispatch = {dispatch}/>
      <RightSection emailState = {emailState} />
    </div>
  );
}


