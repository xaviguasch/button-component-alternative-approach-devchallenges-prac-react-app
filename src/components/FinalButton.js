import './FinalButton.css'

const FinalButton = (props) => {
  return (
    <div>
      <button className={`btn btn--final ${props.colorSetter}`}>
        I'm the final button
      </button>
    </div>
  )
}

export default FinalButton
