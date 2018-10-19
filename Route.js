import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Public from './App'
import Private from './components/Chatprivate/Chatp'
import Contact from './components/Contact/Contact'




//<Route exact path="/lists_doctors/:adresse"render={(props) => <Lists_doctors adresse={props.match.params.adresse}/>}/> 





class Routeapp extends Component {
  render() {
    return (
      <div>
<Route exact path="/" render={() => <Public />}/>  
<Route exact path="/private" render={() => <Private/>}/> 
<Route exact path="/contact" render={() => <Contact/>}/> 
 </div>

    );
  }
}

export default Routeapp;
