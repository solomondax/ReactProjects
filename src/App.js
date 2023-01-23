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
  
  buttonFunction = () => {
    const { isLogged } = this.state
    
    if (isLogged === true) {
      return <button className="buttons" onClick ={this.setFunction}>LOGOUT</button>
    }
    else {
       return <button className="buttons" onClick ={this.setFunction}>LOGIN</button>
    }
  }
    
  render() {
    return( 
      <div className="main-container">
        <div className="sub-container">
          <Login name="Hello User" />
          {this.buttonFunction()}
        </div>
      </div>
     )
  }
  }
  export default App
  
   
   
   

   
             


        
        

    