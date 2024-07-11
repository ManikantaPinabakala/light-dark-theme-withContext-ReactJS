import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickThemeButton = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <nav className="navbar-container navbar-dark-container">
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
              />
              <ul className="nav-list">
                <li>
                  <Link to="/" className="link link-dark">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link link-dark">
                    About
                  </Link>
                </li>
              </ul>
              <img
                className="theme"
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                data-testid="theme"
                onClick={onClickThemeButton}
              />
            </nav>
          ) : (
            <nav className="navbar-container">
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
              />
              <ul className="nav-list">
                <li>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link">
                    About
                  </Link>
                </li>
              </ul>
              <img
                className="theme"
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                data-testid="theme"
                onClick={onClickThemeButton}
              />
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
