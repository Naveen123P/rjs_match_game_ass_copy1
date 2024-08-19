import '../../App.css'

const ScoreCard = props => {
  const {score, onClickReset} = props
  const onClickResetButton = () => {
    onClickReset()
  }

  return (
    <div className="palyGround-bg">
      <div className="card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-img"
        />
        <div className="score-container">
          <h1 className="your-score">Your Score</h1>
          <p className="score-style">{score}</p>
          <button
            type="button"
            className="reset-button"
            onClick={onClickResetButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="reset-img"
            />
            <p className="reset-text">PLAY AGAIN</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard
