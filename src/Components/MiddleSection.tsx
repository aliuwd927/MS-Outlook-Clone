
import { PropsWithChildren } from "react";
import { SearchBarInput } from "./SearchBarInput";


export default function MiddleSection(props:PropsWithChildren<{}>){
 
    return (
      <div className="middleSection_Container">
        <SearchBarInput type='text' placeholder='Search' />
        {props.children }
      </div>
    )
  }

































/*
<InboxComponent searchBarValue={searchBarValue}/>
export default function MiddleSection(){
  const [searchBarValue, setSearchBarValue] = useState('');
    return (
      <div className="middleSection_Container">
        <SearchBarInput type='text' placeholder='Search' setSearchBarValue={setSearchBarValue} />
        <Routes>
          <Route path='/prop.InboxComponent' element={<InboxComponent searchBarValue={searchBarValue}/>}/>
          <Route path='/DeletedComponent' element={<DeletedComponent/>} />
        </Routes>
        
      </div>
    )
  }




*/