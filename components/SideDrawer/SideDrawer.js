import React from 'react'
import './SideDrawer.css'
const sideDrawer= props=> {
    let drawerclasses='side-drawer'
    if(props.show){
     drawerclasses='side-drawer open'   
    }
    return (

<nav className={ drawerclasses}>
        <ul>
    <li>
<a href='/'> <i className="fa fa-home"></i>Home</a>
    </li>
    <li>
    <a href='/'> <i className="fa fa-user-circle"></i>help</a>


    </li>
    <li>
    <a href='/'> <i className='fa fa-bars'></i>product</a>

    </li>
    </ul>
    
</nav>




);}
export default sideDrawer;