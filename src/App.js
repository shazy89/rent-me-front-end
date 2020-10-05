import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
//import Offline from './components/Offline'
import Welcome from './components/Welcome'
import { Navbar, NavItem, Icon } from 'react-materialize'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }
componentDidMount() {
    this.loginStatus()
  }
loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }
handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }
handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

render() {
  const isLoggedIn = this.state.isLoggedIn;
  let stat;
  if (isLoggedIn){
    stat = <Welcome />
  } 
    return (
      <div class="container">


   <BrowserRouter>
<Switch>
 <Route 
    exact path='/' 
    render={props => (
    <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
    )}
  /> 
 <Route 
    exact path='/login' 
    render={props => (
      <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
    )}
  />
    <Route 
    exact path='/signup' 
    render={props => (
      <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
    )}
  />
</Switch>

</BrowserRouter>

 <div>
   {stat}
 </div>


      </div>
    );
  }
}
export default App;

