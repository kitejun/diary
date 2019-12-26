import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
      const displaynone={
        display:"none",
      }
      return (
        <div>
          <ul>
            <li style={displaynone}>
              <Link to={'/'}></Link>
            </li>
            <li style={displaynone}>
              <Link to={'/login'}></Link>
            </li>
            <li style={displaynone}>
              <Link to={'/signup'}></Link>
            </li>
            <li style={displaynone}>
              <Link to={'/third'}></Link>
            </li>
          </ul>
        </div>
      )
    }
  }
  
  export default Header