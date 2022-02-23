import { useState } from "react"
import { InboxComponent } from "./InboxComponent"
import { SearchBarInput } from "./SearchBarInput"

export default function MiddleSection(){
  const [searchBarValue, setSearchBarValue] = useState('');
    return (
      <div className="middleSection_Container">
        <SearchBarInput type='text' placeholder='Search' setSearchBarValue={setSearchBarValue} />
        <InboxComponent searchBarValue={searchBarValue}/>
      </div>
    )
  }