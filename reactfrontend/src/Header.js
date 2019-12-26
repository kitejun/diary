import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
      return (
        <div>
          <ul>
            <li>
              <Link to={'/'}>홈</Link>
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
        </div>
      )
    }
  }
  
  export default Header