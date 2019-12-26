import React, { Component } from 'react'
// npm install react-router-dom
import { Route, Link } from 'react-router-dom'
import './App.css';
// handlingSubmit() 에서 사용
import api from './api';
import PostView from './Components/PostView';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header.js'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      content: "",
      //image: "",
      author: "",
      results: [],
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  async getPosts() {
    const _results = await api.getAllPosts()
    console.log(_results)
    this.setState({results: _results.data})
  }

  handlingChange = (event) => {
    this.setState({[event.target.name]: event.target.value})    
  }

  handlingDelete = async (id) => {
    await api.deletePost(id)
    this.getPosts()
  }
  

  handlingSubmit = async (event) => {
    event.preventDefault() // event의 기본적인 기능을 하지않게 함
    let result = await api.createPost(
      {
        title: this.state.title,
        content: this.state.content,
        author: this.state.author,
        // image: this.state.image,
      }
    );
    console.log("작성 완료!", result);
    this.setState({title: '', content: '', author: ''})
    this.getPosts()
  }

  render() {
    const backstyle={
      background:"white",
    }
    
    const buttonstyle={
      background:"white",
    }

    const formstyle={
      background:"white",
    }

    const filestyle={
      background:"white",
      border: "solid 1px #ccc",
      borderRadius: "3px",
      height:"2rem",

    }
    return (

      <div className="App">
        <Container maxWidth="lg">
          <div className="fixed">
          <div className="PostingSection">
            <Paper className="PostingPaper"  style={backstyle}>
              <h2>오늘의 일기</h2>
              <form className="PostingForm" onSubmit={this.handlingSubmit}>
                <TextField
                  id="outlined-name"
                  label="글 제목"
                  name="title"
                  value={this.state.title}
                  onChange={this.handlingChange}
                  margin="normal"
                  variant="outlined"
                  style={formstyle}
                />
                <TextField
                  id="outlined-name"
                  label="닉네임"
                  name="author"
                  value={this.state.author}
                  onChange={this.handlingChange}
                  margin="normal"
                  variant="outlined"
                />

                {/* <br /> */}

                {/* <textarea 
                  name="content"
                  value={this.state.content}
                  onChange={this.handlingChange}
                /> */}

                <TextField
                  id="outlined-name"
                  label="본문"
                  name="content"
                  multiline
                  rowsMax="4"
                  value={this.state.content}
                  onChange={this.handlingChange}
                  margin="normal"
                  variant="outlined"
                  className="outline-content"
                  style={formstyle}

                />

                {/* <br /> */}
                <Button variant="outlined" color="primary" type="submit" style={buttonstyle}>저장하기</Button>
              </form>
            </Paper>
          </div>
        </div>
        <div className="none-fixed">
          <div className="ViewSection">
            {
              this.state.results.map(
                (post) =>
                <Card className={'card'}  style={backstyle}>
                  <CardContent>
                    <Typography className={'card-title'} color="textSecondary" gutterBottom>
                      {post.id}번째 글
                    </Typography>
                    <Typography variant="h5" component="h2">
                      <PostView
                      key={post.id}
                      title={post.title}
                      style={formstyle}

                      />
                    </Typography>
                    <h4>작성자 : {post.author}</h4>
                    <h4>작성일 : {post.created_at}</h4>
                    <img src={post.image} alt=""/>
                    <h2>{post.content}</h2>

                  </CardContent>
                  <CardActions>
                    <Button value={post.id} onClick={(event) => this.handlingDelete(post.id)} color="secondary" size="small">삭제하기</Button>
                  </CardActions>
               </Card>
              )
            }
          </div>
          </div>
        </Container>
      </div>
      
    )
  }
}


export class Login extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      id : '',
      password : '',
    }
  }

  handlingChange = (event) => {
    this.setState({[event.target.name] : event.target.value})
  }
  // handlingSubmit = () => {
  //   api.createPost()
  // }
  
  render() {
    return (
      <div>
        <h2>1, 로그인 페이지</h2>
        <h2>1, 로그인 페이지</h2>
        <h2>1, 로그인 페이지</h2>
        <h2>1, 로그인 페이지</h2>
      </div>
    )
  }
}

export class Signup extends Component {
  render() {
    return (
      <div>
        <h3>2, 회원가입 페이지</h3>
        <h2>1, 로그인 페이지</h2>
        <h2>1, 로그인 페이지</h2>
      </div>
    )
  }
}
export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Open with fade transition
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
export class Third extends Component {
  render() {
    return (
      <div>
        <Link to={`${this.props.match.url}/1`} style={{ marginRight: '5px' }}>
          1번
        </Link>
        <Link to={`${this.props.match.url}/2`}>2번</Link>
        <Route
          exact
          path={this.props.match.url}
          render={() => (
            <div>
              <h3>id를 선택해 주세요.</h3>
            </div>
          )}
        />
        <Route path={`${this.props.match.url}/:id`} component={Item} />
      </div>
    )
  }
}

class Item extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.match.params.id}</h3>
      </div>
    )
  }
}