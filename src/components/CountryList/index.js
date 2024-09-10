import './index.css'

const CountryList = props => {
  const {countryDetails, onClickVisitBtn} = props
  const {id, name, isVisited} = countryDetails

  const onClickBtn = () => {
    onClickVisitBtn(id)
  }

  return (
    <li key={id}>
      <p>{name}</p>

      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button type="button" onClick={onClickBtn}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryList
