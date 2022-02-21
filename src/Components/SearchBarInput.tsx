import React, {FC} from 'react';

 export interface SearchProp{
  children?: React.ReactNode,
  type?: 'text',
  value?: string | number,
  placeholder?: string,
}

export const SearchBarInput: FC<SearchProp> = ({value="",placeholder})=>{
  return (
    <input 
      value={value}
      placeholder={placeholder}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value
      console.log(newValue);
      }}
      >
      </input>
  )
}

/*

Question: What will the search bar input do?

It will filter out current map, and return the email we are looking for

we take value from search bar input
if search is empty, return standard emails
if search is incorrect show nothing
if search contains show it ( could possible have multiples emails with certain word )


Idea:
we can use something like this...
    emailObject
    .filter((element)=>{
      //something there if found
      //take value from e.target.value
    })
    .map((element)=>{
      //get items from filter if there are anything
      //returns all items based on filter
      //if none, return standar email
    })
*/


/*
    {emailObject
      .filter((element:EMail)={
        if(element === e.target.value){
          return element
        }else{
          return element
        }
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


*/