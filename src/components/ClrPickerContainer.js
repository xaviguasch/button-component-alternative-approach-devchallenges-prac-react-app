import './ClrPickerContainer.css'
import ColorPickerButton from './ColorPickerButton'

const ClrPickerContainer = (props) => {
  const clrPickerHandler = (color) => {
    props.getColor(color)
  }

  return (
    <div className='clr-picker-container'>
      <ColorPickerButton pickColor={clrPickerHandler} buttonColor={'default'} />
      <ColorPickerButton pickColor={clrPickerHandler} buttonColor={'primary'} />
      <ColorPickerButton pickColor={clrPickerHandler} buttonColor={'secondary'} />
      <ColorPickerButton pickColor={clrPickerHandler} buttonColor={'danger'} />
    </div>
  )
}

export default ClrPickerContainer
