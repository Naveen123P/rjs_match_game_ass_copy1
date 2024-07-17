import {Component} from 'react'

class Header extends Component {
  state = {
    initialTime: 60,
  }

  componentDidMount() {
    const {initialTime} = this.state
    if (initialTime === 0) {
      clearInterval(this.timerId)
    }
    this.timerId = setInterval(() => {
      this.setState({
        initialTime: initialTime - 1,
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    const {initialTime} = this.state
    const {score} = this.props
    return (
      <div className="header-bg">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </div>
        <div className="score-timer-container">
          <div className="score-container">
            <p className="score-element">Score:{score}</p>
          </div>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-img"
            />
            <p className="timer-element">{initialTime} sec</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
