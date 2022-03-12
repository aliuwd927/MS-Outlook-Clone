import {Link} from 'react-router-dom';
import {rightSectionDispatch} from './zustand';
export default function LeftSection(){
 const deleteComponentReset = rightSectionDispatch(state => state.emailDispatchReset);
  return (
  <div className="leftSection_Container">
    <a href="#all" className="dropdown_menu">
    <div className="arrow_up" ></div>
    <p data-toggle="dropdown" className="dropdown_menu_all">Favorites</p>
    </a>

    <ul className="dropdown_subMenu"> 
      <li><Link to='/inboxPage'>Inbox</Link></li>
      <li><a href="#draft" >Draft</a></li>
      <li><a href="#sent">Sent</a></li>
      <li>
        <Link to='/deletePage'
          onClick={()=>deleteComponentReset()}
        >Deleted</Link></li>
    </ul>

  </div>
  )
}


/*
      ---Plan of Attack---

      Create a for loop, attach listener to each element
      EL will liftstate up
      Pass to MiddleSection


  ul
    li=>a=>attach el=>onClick=>LiftStateUp=>PassStateLiftedToMiddleSection
    li=>a=>attach el=>onClick=>LiftStateUp=>PassStateLiftedToMiddleSection
    li=>a=>attach el=>onClick=>LiftStateUp=>PassStateLiftedToMiddleSection
    li=>a=>attach el=>onClick=>LiftStateUp=>PassStateLiftedToMiddleSection
  ul


  https://stackblitz.com/edit/react-yktq3p?file=src%2Findex.js
  https://codesandbox.io/s/divine-snow-t8t8hr
 */





/*



  export default function LeftSection(){
 
  return (
  <div className="leftSection_Container">
    <a href="#all" className="dropdown_menu">
    <div className="arrow_up" ></div>
    <p data-toggle="dropdown" className="dropdown_menu_all">Favorites</p>
    </a>

    <ul className="dropdown_subMenu"> 
      <Routes>
      <li><a href="#inbox" >Inbox</a></li>
      <li><a href="#draft" >Draft</a></li>
      <li><a href="#sent">Sent</a></li>
      <li><a href="#deleted">Deleted</a></li>
      </Routes>
    </ul>

  </div>
  )
}






 */

