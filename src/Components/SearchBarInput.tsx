import React, {FC} from 'react';

 export interface SearchProp{
  children?: React.ReactNode,
  type?: 'text',
  value?: string | number,
  placeholder?: string,
}

export const SearchBarInput: FC<SearchProp> = ({value="",placeholder})=>{
  return (<input 
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