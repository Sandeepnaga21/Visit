import './index.css'

const VisitedCountries = props => {
  const {visitedCountry, onRemoveBtnClicked} = props
  const {id, name, imageUrl} = visitedCountry

  const onRemoveBtn = () => {
    onRemoveBtnClicked(name)
  }

  return (
    <li key={id}>
      <img src={imageUrl} className="img" alt="thumbnail" />
      <div className="between">
        <p>{name}</p>
        <button onClick={onRemoveBtn} type="button" className="remove">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountries
