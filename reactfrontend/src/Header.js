import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
      return (
        <div class="nav_wrapper"> 
     
           <nav class="menu">
          <ul>
            <li>
              <Link to={'/'}>메인</Link>
            </li>
            <li>
              <Link to={'/login'}>로그인</Link>
            </li>
            <li>
              <Link to={'/signup'}>회원가입</Link>
            </li>
            <li>
              <Link to={'/third'}>테스트</Link>
            </li>
          </ul>
          </nav>
        </div>
      )
    }
  }
  
  export default Header