import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import { Button } from 'react-materialize'

import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import NavBar from './containers/NavBar'
import CarForm from './components/rentalcars/CarForm'
import Admin from './containers/Admin'
import CarList from './components/rentalcars/CarList'
import CarEdit from './components/rentalcars/CarEdit'
import {connect} from 'react-redux'
import SearchCars from './containers/SearchCars'


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
        this.handleLogin(response.data)
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

       < NavBar {...this.props} handleLogOut={this.handleLogOut} loggedInStatus={this.state.isLoggedIn} />
       { this.state.isLoggedIn ? <Button className="black"> <Link to="/admin"> Admin User</Link> </Button> : null}
       <SearchCars />
       <Switch>
   
       <Route exact path='/carlist' 
          render={props => (
           <CarList {...props}  loggedInStatus={this.state.isLoggedIn}/>
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
          <Route 
          exact path='/admin' 
          render={props => (
            <Admin {...props} loggedInStatus={this.state.isLoggedIn}/>
            )}
          />
             <Route exact path='/cars/:id/edit'  
           render={props => (
            <CarEdit {...props} fetchCars={this.props.cars} loggedInStatus={this.state.isLoggedIn}/>
            )}
          />

            <Route exact path='/cars/new' component={ CarForm } />
     
      </Switch>
      </BrowserRouter>
        </div>
  
       );
     }
   }
  
   const mapStateToProps = carsReducer => {
    return {
      cars: carsReducer
     }
    }
   export default connect(mapStateToProps)(App);
  



          
   




    




      


