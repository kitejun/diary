import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Login, Signup, Third, Update } from './App.js';
import './index.css';
import Header from './Header.js';
import * as serviceworker from './serviceWorker';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

ReactDOM.render(
  
  <Router>
            <div className="root">
                <AppBar position="fixed" className="menubar">
                    <Toolbar>
                        <Typography variant="h6" className="title">
                            My Diary
                        </Typography>
                        <Button color="inherit"><Link className="navButton" to="/">Home</Link></Button>
                        <Button color="inherit"><Link className="navButton" to="/login">Login</Link></Button>
                        <Button color="inherit"><Link className="navButton" to="/signup">SignUp</Link></Button>
                        <Button color="inherit"><Link className="navButton" to="/third">Test</Link></Button>
                    </Toolbar>
                </AppBar>
            </div>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/third" component={Third} />
      <Route path="/update/:id" component={Update} />
    </div>
  </Router>,
  document.getElementById('root')
)

serviceworker.unregister();