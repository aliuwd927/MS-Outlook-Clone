import { useState } from "react";
import { PropsWithChildren } from "react";
import { InboxComponent } from "./InboxComponent";
import { SearchBarInput } from "./SearchBarInput";
import { Routes,Route,Outlet,Link } from "react-router-dom";
import DeletedComponent from "./DeletedComponent";

export default function MiddleSection(props:PropsWithChildren<{}>){
  const [searchBarValue, setSearchBarValue] = useState('');
    return (
      <div className="middleSection_Container">
        <SearchBarInput type='text' placeholder='Search' setSearchBarValue={setSearchBarValue} />
        {props.children}
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