import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-list-container">
      <img src={imageUrl} alt={appName} className="app-images" />
      <p className="description">{appName}</p>
    </li>
  )
}

export default AppItem
