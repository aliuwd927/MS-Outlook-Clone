import emails from './emails.json';
import {rightSectionDispatch, useStore} from './zustand';
//const {v4: uuidv4} = require('uuid');

export interface EMail{
  id:string,
  profilePicture: string,
  nameOfSender:string,
  titleOfEmail:string,
  bodyMessage:string,
  dateOfMessage:string,
  isAttachment:string,
}



export const InboxComponent = () =>{
  const dispatchState = rightSectionDispatch(state => state.emailDispatch);
  const searchBarValue = useStore(state => state.searchState);
 
  return(
    <div className="table_Container">
         {emails.reduce((accumulator,current)=>{
              if(!current.bodyMessage.toLocaleLowerCase().includes(searchBarValue.toLocaleLowerCase())){
                return accumulator
              }else{
                return [...accumulator, 
                  <div 
                  key={current.id}
                  className="table_row_data"
                  onClick = {()=>{
                    dispatchState(current);
                    
                  }} >
                    <div>{current.nameOfSender}</div>
                    <div>{current.titleOfEmail}</div>
                    <div>{current.bodyMessage}</div>
                  </div>]
              }
          },[] as JSX.Element[])
    }
    </div>
    )
   }







   

/*

export const InboxComponent = (props: {searchBarValue:string}) =>{
  const dispatch = useContext(EmailDispatchContext)!;
  const {searchBarValue} = props;
  return(
    <div className="table_Container">
         {emails.reduce((accumulator,current)=>{
            //console.log([...accumulator,current.bodyMessage])
            //we put ! bc when we do ***Console this on dev tools ***
            //"SOMETHING".includes("") ==> This equates to true because of the ""
            //!"SEOMTHING".includes("") ==> Changes the value from true to false

            //////
             if(true){
               //do something
             }else{
               //do something else if false
             }
            ///////

             //////
              Current Action:
                if(currentStateMent is false bc of !, when it is true THEN we fire the return){
                  return *FIRING BC TRUE*
                }else{
                  return *FIRING BC FALSE*
                }
            ////////

                if(!current.bodyMessage.toLocaleLowerCase().includes(searchBarValue.toLocaleLowerCase())){
                  return accumulator
                }else{
                  return [...accumulator, 
                    <div 
                    key={current.id}
                    className="table_row_data"
                    onClick = {(e)=>{
                      dispatch({
                        type:'update',
                        data: {element: current}
                      })
                    }} >
                      <div>{current.nameOfSender}</div>
                      <div>{current.titleOfEmail}</div>
                      <div>{current.bodyMessage}</div>
                    </div>]
                }
            },[] as JSX.Element[])
      }
      </div>
      )
     }
  






*/























/*
      Get Rid Of Filter and Map, use Reduce Method
{

[].reduce((output, item) => { return output }, {})


{

{emailObject.reduce<string[]>((accumulator,current)=>{
            console.log([...accumulator,current.bodyMessage])
            return [...accumulator, current.bodyMessage]
          },[] //this is inital value)
        }
ad0ran: so you see how you're spreading the `...previousValue` into the returned array? it basically means you're putting the accumulated data that you've processed into the next value
ad0ran: yea, exactly. that's maintaining a singular value because it's just a bunch of integers being summed into each other
ad0ran: yea so in your scenario, you're not summing up integers, you're basically composing an array of jsx by adding the next value ontop of the previous accumulated data
ad0ran: yea, thats right, so you're giving the reducer function an initial value, which is an empty array. so the first iteration, your accumulator would be an empty array
ad0ran: but you can put in conditions on when you want it to be added or no
ad0ran: so for example, "if (current.bodyMessage.length === 0) return accumulator;
ad0ran: meaning you don't want to add in anything with an empty boddyMessage to the acumulated value

ad0ran: return bodyMessage.length === 0 ? accumulator : [...accumulator, bodyMessage]; ***this is more ideal for real world use.***
xmetrix: or return bodyMessage.length ? [...a,b...]:acc; LUL cause why bother explicitly checking if its 0... 
          need a lil room for errors like undefined or null =)

*/




/*
  //Step 1
{emailObject.map((element:EMail)=>{
  return(
    <div
              className="table_row_data" 
              key = {uuidv4()}
              onClick = {(e)=>{
                dispatch({
                  type:'update',
                  data: {element}
                })
              }}
              >
                <div>{element.nameOfSender}</div>
                <div><strong>{truncate(element.titleOfEmail)}</strong></div>
                <div>{truncate(element.bodyMessage)}</div>
             </div>
  )
})}





*/


/*

  //Step 2
  {emailObject.filter().map()}

*/




/*
maxjowett: when an email is created, that would be the time to assign it a unique id
maxjowett: from that point you can use it as a key

*/


















/*

THIS IS BACK UP IF WE FUCK THIS UP. DONT FUCK IT UP. 

export const InboxComponent = (props: {searchBarValue:string}) =>{
  const dispatch = useContext(EmailDispatchContext)!;
  const {searchBarValue} = props;
  return(
    <div className="table_Container">
          {emailObject
      .filter((element: EMail) => {
        //This below code below works bc the includes returns true / false value and keeps the true value.
        return element.bodyMessage.toLocaleLowerCase().includes(searchBarValue.toLocaleLowerCase());
        })
      .map((element: EMail) =>{
            function truncate(input: string, len: number = 30): string {
              if (input.length <= len) {
                return input;
              } else {
                return input.substring(0, len) + '...';
              }
            }
            return(
              <div
              className="table_row_data" 
              key = {uuidv4()}
              onClick = {(e)=>{
                dispatch({
                  type:'update',
                  data: {element}
                })
              }}
              >
                <div>{element.nameOfSender}</div>
                <div><strong>{truncate(element.titleOfEmail)}</strong></div>
                <div>{truncate(element.bodyMessage)}</div>
             </div>
            )
          })
    }
    </div>
    )
   }












*/












/*

--- Old Code To Revert Back To If Something Goes Terribly Wrong ---

export const InboxComponent = (props: {searchBarValue:string}) =>{
  const dispatch = useContext(EmailDispatchContext)!;

  return(
    <div className="table_Container">
          {emailObject.map((element: EMail) =>{
            function truncate(input: string, len: number = 30): string {
              if (input.length <= len) {
                return input;
              } else {
                return input.substring(0, len) + '...';
              }
            }
            return(
              <div
              className="table_row_data" 
              key = {uuidv4()}
              onClick = {(e)=>{
                dispatch({
                  type:'update',
                  data: {element}
                })
              }}
              >
                <div>{element.nameOfSender}</div>
                <div><strong>{truncate(element.titleOfEmail)}</strong></div>
                <div>{truncate(element.bodyMessage)}</div>
             </div>
            )
          })}
    </div>
    )
   }


   https://stackoverflow.com/questions/52364702/react-reduce-within-jsx-not-rendering

*/