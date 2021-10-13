import './FinalButton.css'

const FinalButton = (props) => {
  // need to wire the style and size props
  return (
    <div>
      <button
        className={`btn btn--final ${props.colorSetter} ${
          props.boxShadow ? 'shadow' : ''
        } ${props.style} ${props.size}`}
        disabled={props.disabled}
      >
        <span className='material-icons'>{props.icon !== 'block' ? props.icon : ''}</span>
        I'm the final button
      </button>
    </div>
  )
}

export default FinalButton
