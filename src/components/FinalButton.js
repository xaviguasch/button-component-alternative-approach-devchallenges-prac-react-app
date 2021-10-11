import './FinalButton.css'

const FinalButton = (props) => {
  return (
    <div>
      <button className={`btn btn--final ${props.colorSetter}`}>
        <span className='material-icons'>{props.icon !== 'block' ? props.icon : ''}</span>
        I'm the final button
      </button>
    </div>
  )
}

export default FinalButton
