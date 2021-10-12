import './Dropdown.css'

const Dropdown = (props) => {
  const submitHandler = (e) => {
    props.getOptionPicked([e.target.name, e.target.value])
  }

  return (
    <div>
      <label htmlFor={props.type}>{props.type}</label>
      <select name={props.type} id={props.type} onChange={submitHandler}>
        {props.options.map((option) => (
          <option key={Math.random()} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
