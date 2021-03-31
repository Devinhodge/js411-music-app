  
import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import Dashboard from './Components/Dashboard'
import NavBar from './Components/Navbar'
import TextField from '@material-ui/core/TextField';





class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: ''
    }
  }

  changeState = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
    console.log(this.state.isLoggedIn)
  }


  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <Dashboard loggedIn={this.state.isLoggedIn} click={this.changeState}></Dashboard>
        </div>
      )
    } else {
      return (
        <div >
          <NavBar></NavBar>
          <br /><br />
          <div className="SignIn">
            <form noValidate autoComplete="off">
              <TextField id="standard-basic" label="UserName" /><br />
              <TextField id="standard-basic" label="Password" /><br /><br />
              <Button variant="contained" color="primary" onClick={this.changeState}> Log In</ Button>
            </form>
          </div>
        </div>
      )
    }
  }
}

export default App;