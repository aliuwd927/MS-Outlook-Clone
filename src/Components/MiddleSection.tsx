import { InboxComponent } from "./InboxComponent"
import { SearchBarInput } from "./SearchBarInput"

   export default function MiddleSection(){
    return (
      <div className="middleSection_Container">
        <SearchBarInput type='text' value='' placeholder='Search'/>
        <InboxComponent/>
      </div>
    )
  }