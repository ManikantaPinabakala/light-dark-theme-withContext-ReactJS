import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
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
                  className="not-found-image"
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                />
                <h1 className="not-found-dark-heading">Lost Your Way?</h1>
                <p className="not-found-dark-desc">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className="section-container">
                <img
                  className="not-found-image"
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                />
                <h1 className="not-found-heading">Lost Your Way?</h1>
                <p className="not-found-desc">
                  We cannot seem to find the page you are looking for.
                </p>
              </div>
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
