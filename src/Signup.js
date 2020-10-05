import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password, password_confirmation} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
redirect = () => {
    this.props.history.push('/')
  }
handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}</ul> 
      </div>
    )
  }
render() {
    const {username, email, password, password_confirmation} = this.state
return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={"classes.paper"}>
      <Avatar className={"classes.avatar"}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form onSubmit={this.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="username"
          name="email"
          autoComplete="email"
          autoFocus
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
         <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={this.handleChange}
          placeholder="password"

        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Password"
          id="password"
          autoComplete="current-password"
          value={password}
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={password_confirmation}
          onChange={this.handleChange}
          />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={"Sign up"}
        >
          Sign up
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link to='/login' variant="body2">
              {"Already have an account? Log in"}
            </Link>
          </Grid>
        </Grid>
      </form>
      <div>
    {
       this.state.errors ? this.handleErrors() : null
    }
      </div>
    </div>
    <Box mt={8}>

    </Box>
  </Container>
    );
  }
}
export default Signup;
    


 


//<form onSubmit={this.handleSubmit}>
//<input
//  placeholder="username"
//  type="text"
//  name="username"
//  value={username}
//  onChange={this.handleChange}
///>
//<input
//  placeholder="email"
//  type="text"
//  name="email"
//  value={email}
//  onChange={this.handleChange}
///>
//<input 
//  placeholder="password"
//  type="password"
//  name="password"
//  value={password}
//  onChange={this.handleChange}
///>
//<input
 // placeholder="password confirmation"
 // type="password"
 // name="password_confirmation"
 // value={password_confirmation}
 // onChange={this.handleChange}
///>
//
//<button placeholder="submit" type="submit">
//  Sign Up
//</button>
//
//</form>