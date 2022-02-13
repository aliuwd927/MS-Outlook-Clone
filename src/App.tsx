import './App.css';
import LeftSection from './Components/LeftSection';
import MiddleSection from './Components/MiddleSection';
import RightSection from './Components/RightSection';
import { useReducer } from 'react';


//Action Type only needs one type, and its to send to rightsection ONLY

export default function App() {
  //do not do this. instead pass data. it is far safer.
 const initialState = <div>Hello World</div>
 
  //const [email,dispatch] = useReducer(state,action);

  return (
    <div className="App">
      <LeftSection />
      <MiddleSection />
      <RightSection initial = {initialState}/>
    </div>
  );
}


