import React, { Component } from "react"
import Login from './Login.js'
import './App.css'

class App extends Component {

  state = {
    isLogged :   false,
  }
  setFunction = () => {
     this.setState(preveState => ({isLogged : !preveState.isLogged}))
   }
   
   

render() {
  const { isLogged } = this.state
     let authButton = null;
    if (isLogged === true) {
      authButton = <button className="buttons" onClick ={this.setFunction}>LOGOUT</button>
    }
    else {
       authButton = <button className="buttons" onClick ={this.setFunction}>LOGIN</button>
    }

    return( 
      <div className="main-container">
        <div className="sub-container">
          <Login name="Hello User" />
          {authButton}
     
        </div>
      </div>
               
        )
    }
  }
  
  
  export default App
        
        

    