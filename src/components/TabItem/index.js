import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const classNameActive = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" className={classNameActive} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
