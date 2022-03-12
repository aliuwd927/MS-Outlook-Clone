import './App.css';
import {Outlet} from 'react-router-dom';
import LeftSection from './Components/LeftSection';
import MiddleSection from './Components/MiddleSection';
import RightSection from './Components/RightSection';



export default function App() {

  return (
    <div className="App">
            <LeftSection />
            <MiddleSection>
              <Outlet/>
            </MiddleSection>
            <RightSection />  
    </div>
   
  );
}



/*
 <div className="App">
      <EmailProvider>
        <LinkProvider>
          <LeftSection />
          <MiddleSection />
          <RightSection />
        </LinkProvider>
      </EmailProvider>
    </div>
 
 */









 

/*

Use this to revert


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
    return action.data.element;
  }else{
    return state;
  }
  
 }

 const [emailState,dispatch] = useReducer(reducer, initialData) 
 //const [emailState,dispatch] = useContext(EmailContext)

  return (
    <div className="App">
      <LeftSection />
      <MiddleSection dispatch = {dispatch}/>
      <RightSection emailState = {emailState} />
    </div>
  );
}










*/