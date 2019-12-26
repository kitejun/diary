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
import Header from './Header.js'


export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      content: "",
      // image: null,
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

  // handlingDelete = async (id) => {
  //   await api.deletePost(id)
  //   this.getPosts()
  // }
  
  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handlingSubmit = async (event) => {
    event.preventDefault() // event의 기본적인 기능을 하지않게 함
    let result = await api.createPost(
      {
        title: this.state.title,
        content: this.state.content,
      }
    );
    console.log("작성 완료!", result);
    this.setState({title: '', content: ''})
    this.getPosts()
  }

  render() {
    const backstyle={
      background:"rgba(22,201,223,0.3)",
    }
    
    const buttonstyle={
      background:"white",
    }

    const formstyle={
      background:"white",
    }

    return (

      <div className="App">
        <Container maxWidth="lg">
          <div className="fixed">
          <div className="PostingSection">
            <Paper className="PostingPaper"  style={backstyle}>
              <h2>대나무 숲 글 작성하기</h2>
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
                
                <input 
                  type="file" 
                  name="image"
                  value={this.state.image}
                  onChange={this.handlingChange}></input>
                
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
                <Button variant="outlined" color="primary" type="submit" style={buttonstyle}>제출하기</Button>
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
                      {post.id}번째 대나무
                    </Typography>
                    <Typography variant="h5" component="h2">
                      <PostView
                      key={post.id}
                      title={post.title}
                      content={post.content}
                      style={formstyle}

                      />
                    </Typography>
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
  render() {
    return (
      <div>
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
      </div>
    )
  }
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
