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

*/