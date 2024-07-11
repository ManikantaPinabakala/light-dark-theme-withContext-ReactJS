import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          {isDarkTheme ? (
            <>
              <Navbar />
              <div className="section-container dark-container">
                <img
                  className="section-image"
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                />
                <h1 className="dark-heading">About</h1>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="section-container">
                <img
                  className="section-image"
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                />
                <h1 className="section-heading">About</h1>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
