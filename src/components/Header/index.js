import {Component} from 'react'
import './index.css'

class Header extends Component {
  constructor(props) {
    super(props)
    const {initialTime, isTimerRunning, timeUp} = props
    this.state = {
      initialTime,
      isTimerRunning,
      timeUp,
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.timerId = setInterval(this.updateTime, 1000)
  }

  componentDidUpdate() {
    const {isTimerRunning} = this.state
    if (isTimerRunning === false) {
      clearInterval(this.timerId)
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timerId)
    this.setState({initialTime: 3})
  }

  stopTimer = () => {
    const {timeUp} = this.state
    timeUp()
  }

  updateTime = () => {
    const {initialTime, isTimerRunning} = this.state
    if (initialTime > 0 && isTimerRunning) {
      this.setState(prevState => ({initialTime: prevState.initialTime - 1}))
    } else {
      this.stopTimer()
      clearInterval(this.timerId)
    }
  }

  render() {
    const {initialTime, isTimerRunning} = this.state
    const {score, palyAgain} = this.props
    console.log(isTimerRunning, palyAgain)
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
          <li className="timer-container">
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
}

export default Header
