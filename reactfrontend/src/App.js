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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Calendar from 'react-calendar';
import format from 'string-format'

export class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      content: "",
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

  // 수정하기
  // handlingUpdate = async (id) => {
  //   const _results = await api.getAllPosts()
  //   this.setState({
  //     results: _results.data.filter(_results.data.id == id)
  //   })
  //   await api.UpdatePost(id)
  //   this.setState({title: '', content: '', author: ''})
  //   this.getPosts()
  // }

  handlingUpdate = async (id, _title, _content) => {
    await api.updatePost(id, _title, _content)
    this.setState({title:'', content:''})
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
      background:"rgba(0,80,178,0.2)",
    }

    const formstyle={
      background:"rgba(0,80,165,0.1)",
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
                  style={formstyle}
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
                    <h2>{post.content}</h2>

                  </CardContent>
                  <CardActions>
                    <Button value={post.id} onClick={(event) => this.handlingDelete(post.id)} color="secondary" size="small">삭제하기</Button>
                    {/* <Button value={post.id} onClick={(event) => this.handlingUpdate(post.id)} color="secondary" size="small">수정하기</Button> */}
                    {/* <Button color="primary" size="small" onClick={(event) => {this.handlingUpdate(post.id, this.state.title, this.state.content)}}>수정하기</Button> */}
                    <Button href={format('./update/{}',post.id)}>
                        수정하기
                    </Button>

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

// 게시글 수정하기
export class Update extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      title: "",
      content: "",
      author: "",
      results: [],
    }
  }

  handlingChange = (event) => {
    this.setState({[event.target.name]: event.target.value})    
  }
  handlingSubmit = async (event) => {
    event.preventDefault() // event의 기본적인 기능을 하지않게 함
    const id = this.props.match.params.id 
    let result = await api.updatePost(id, 
      {
        title: this.state.title,
        content: this.state.content,
        author: this.state.author,
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
    const id = this.props.match.params.id 
    return (
      <div className="App">
        <Container maxWidth="lg">
          <div className="fixed">
          <div className="PostingSection">
            <Paper className="PostingPaper"  style={backstyle}>
              <h2>{id}</h2>
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
                <Button variant="outlined" color="primary" type="submit" style={buttonstyle}>수정하기</Button>
              </form>
            </Paper>
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
        <h1>asdasd</h1>

      </div>
    )
  }
}
export class Signup extends Component {
  state = {
    date: new Date(),
  }
   
  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
    <Calendar
      onChange={this.onChange}
      value={this.state.date}
    />
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