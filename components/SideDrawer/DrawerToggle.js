import React from 'react'
import './DrawerToggle.css'
const sideToggleButton= props=>(


<button className='Toggle_button' onClick={props.click}>
    <div className='Toggle_line_button'></div>
    <div className='Toggle_line_button'></div>
    <div className='Toggle_line_button'></div>

</button>



);
export default sideToggleButton;