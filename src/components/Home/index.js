import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                />
                <h1 className="dark-heading">Home</h1>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="section-container">
                <img
                  className="section-image"
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                />
                <h1 className="section-heading">Home</h1>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
