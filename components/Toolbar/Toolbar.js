import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggle';
import { Link } from "react-router-dom";

const Toolbar= props=>(



    <header className='toolbar'>
<nav className='toolbar_navigation'>
<div className='toggle-button'><DrawerToggleButton click={props.DrawerToggleclick} /></div>
<div className='toolbar_logo'><img className='logo' src={require("./logo1.png")}></img></div>
<div className='space'/>
<div className='toolbar_navigation_items'><ul>
    <li>
    <Link  to="/">
    <i className="fa fa-home"></i>Public
              </Link>
    </li>
    <li>
    <Link to='/private'> <i className="fa fa-user-circle"></i>passer en privé</Link>


    </li>
    <li>
    <Link to='/contact'> <i className='fa fa-bars'></i>contactez-Nous</Link>

    </li>
    </ul>  </div>

</nav>


    </header>
);
export default Toolbar;