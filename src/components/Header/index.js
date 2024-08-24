import './index.css'

const Header = props => {
  const {score, initialTime} = props
  return (
    <div className="header-bg">
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </div>
      <ul className="score-timer-container">
        <li className="score-container">
          <p className="score-element">
            Score: <span className="orange-text">{score}</span>
          </p>
        </li>
        <li className=" score-container timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="timer-element score-element orange-text">
            {initialTime} sec
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Header
