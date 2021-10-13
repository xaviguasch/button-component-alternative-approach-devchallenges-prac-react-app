import './Dropdown.css'

const Dropdown = (props) => {
  const submitHandler = (e) => {
    props.getOptionPicked([e.target.name, e.target.value])
  }

  return (
    <div className='dropdown'>
      <label className='item-label' htmlFor={props.type}>
        {props.type}
      </label>
      <select
        value={props.style || props.size} // 2-way binding
        name={props.type}
        id={props.type}
        onChange={submitHandler}
        className={'capitalize select'}
      >
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
