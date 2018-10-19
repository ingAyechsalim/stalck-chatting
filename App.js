import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/BackDrop/BackDrop'
import Footer from './components/Footer/Footer'
import Chat from './components/Chat/Chat'
import './App.css';


class App extends Component {
  state={
    sideDraweropen:false
  };
  DrawerToggleclick=()=>{
    this.setState((pervstate)=>{return {sideDraweropen:!pervstate.sideDraweropen}} 
  )  }
 BackDropclick=()=>{
    this.setState( {sideDraweropen:false} 
  )}
  
    


  render() {
    let backDrop;
    if (this.state.sideDraweropen){
      backDrop=<BackDrop click={this.BackDropclick}/>
    }
    return (
      <div className="my-app">
       <Toolbar DrawerToggleclick= {this.DrawerToggleclick }/>
  <SideDrawer show={this.state.sideDraweropen}/>
       {backDrop}
       

       <main className='main'>       
       <Chat/>
      


</main>
<footer>
  <Footer/>
</footer>
      </div>
    );
  }
}

export default App;
