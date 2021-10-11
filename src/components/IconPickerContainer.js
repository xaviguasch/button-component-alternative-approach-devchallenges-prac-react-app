import IconButton from './IconButton'

import './IconPickerContainer.css'

const IconPickerContainer = (props) => {
  const iPCHandler = (icon) => {
    props.getIcon(icon)
  }

  return (
    <div className='icon-picker-container'>
      <IconButton pickIcon={iPCHandler} icon='home' />
      <IconButton pickIcon={iPCHandler} icon='account_circle' />
      <IconButton pickIcon={iPCHandler} icon='block' />
    </div>
  )
}

export default IconPickerContainer
