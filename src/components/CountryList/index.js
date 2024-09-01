import './index.css'

const CountryList = props => {
  const {countryDetails, onClickVisitBtn} = props
  const {id, name, isVisited} = countryDetails

  const onClickBtn = () => {
    onClickVisitBtn(name)
  }

  return (
    <li key={id}>
      <p>{name}</p>
      <button type="button" onClick={onClickBtn}>
        Visit
      </button>
      {isVisited ? <p>Visited</p> : null}
    </li>
  )
}

export default CountryList
