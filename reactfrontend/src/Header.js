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
              <Link to={'/first'}>첫번째</Link>
            </li>
            <li>
              <Link to={'/second'}>두번째</Link>
            </li>
            <li>
              <Link to={'/third'}>세번째</Link>
            </li>
          </ul>
        </div>
      )
    }
  }
  
  export default Header