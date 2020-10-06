import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import NavBar from './components/NavBar'
import CarForm from './components/rentalcars/CarForm'


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

  handleLogOut = () => {

    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      this.handleLogout()
      this.history.push('/')
    })
    .catch(error => console.log(error))
  }

render() {

    return (
      <div >
      <BrowserRouter>
     < NavBar {...this.props} handleLogOut={this.handleLogOut} loggedInStatus={this.state.isLoggedIn}/>
     <Switch>
     <Route path='/cars/new' component={ CarForm }/>
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
      </div>
        );
      }
    }
    export default App;


    




      


