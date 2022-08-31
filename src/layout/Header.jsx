import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="teal lighten-2">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            Logo
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
