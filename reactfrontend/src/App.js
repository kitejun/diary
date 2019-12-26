import React from 'react';
//import logo from './logo.svg';
import './detail.css';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

function App() {
  return (
    <div className="App">
    <div className="item">
      <h2>GOODS</h2>
      <div className="item-image" >
      <Paper elevation={3} />
      
      </div>
      <div className="item-detail">

      </div>
    </div>
    <div className="comment">
        <div className="comment-write">
        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
        </div>
        <div className="comment-view">
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

        </div>
    </div>
  </div>
  );
}

export default App;
