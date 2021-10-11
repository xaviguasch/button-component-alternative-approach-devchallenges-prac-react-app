import './ColorPickerButton.css'

const ColorPickerButton = (props) => {
  const clickHandler = () => {
    if (props.buttonColor === 'danger') {
      props.pickColor('danger')
    } else if (props.buttonColor === 'secondary') {
      props.pickColor('secondary')
    } else if (props.buttonColor === 'primary') {
      props.pickColor('primary')
    } else if (props.buttonColor === 'default') {
      props.pickColor('default')
    }
  }

  return (
    <button
      className={`btn btn--color-picker ${props.buttonColor} capitalize`}
      onClick={clickHandler}
    >
      {props.buttonColor}
    </button>
  )
}

export default ColorPickerButton
