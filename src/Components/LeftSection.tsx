

function LeftSection(){
 
  return (
  <div className="left_section_Container">
    <a href="#all" className="dropdown_menu">
    <div className="arrow_up" ></div>
    <p data-toggle="dropdown" className="dropdown_menu_all">All</p>
    </a>

    <ul className="dropdown_subMenu"> 
      <hr /><a href="#inbox" >Inbox</a>
      <hr /><a href="#draft" >Draft</a>
      <hr /><a href="#sent">Sent</a>
      <hr /><a href="#deleted">Deleted</a>
    </ul>

  </div>
  )
}

export default LeftSection;