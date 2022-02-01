



function LeftSection(){
 
  return (
  <div className="leftSection_Container">
    <a href="#all" className="dropdown_menu">
    <div className="arrow_up" ></div>
    <p data-toggle="dropdown" className="dropdown_menu_all">Favorites</p>
    </a>

    <ul className="dropdown_subMenu"> 
      <li><a href="#inbox" >Inbox</a></li>
      <li><a href="#draft" >Draft</a></li>
      <li><a href="#sent">Sent</a></li>
      <li><a href="#deleted">Deleted</a></li>
    </ul>

  </div>
  )
}

export default LeftSection;