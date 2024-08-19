import './index.css'

const TabItems = props => {
  const {tabDetails, isActive, updateActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeButton = isActive ? 'active-button' : ''
  return (
    <li className="tabItem">
      <button
        type="button"
        onClick={onClickTabItem}
        className={`button ${activeButton}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
