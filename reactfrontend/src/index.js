import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Login, Signup, Third } from './App.js';
import './index.css';
import Header from './Header.js';
import * as serviceworker from './serviceWorker';

ReactDOM.render(

  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/third" component={Third} />
    </div>
  </Router>,
  document.getElementById('root')
)

serviceworker.unregister();