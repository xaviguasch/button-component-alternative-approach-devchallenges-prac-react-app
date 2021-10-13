import IconButton from './IconButton'

import './IconPickerContainer.css'

const IconPickerContainer = (props) => {
  const iPCHandler = (icon) => {
    props.getIcon(icon)
  }

  return (
    <div className='icon-picker-container'>
      <p className='item-label'>Icon</p>
      <IconButton pickIcon={iPCHandler} icon='home' />
      <IconButton pickIcon={iPCHandler} icon='account_circle' />
      <IconButton pickIcon={iPCHandler} icon='thumb_up' />
      <IconButton pickIcon={iPCHandler} icon='star' />
      <IconButton pickIcon={iPCHandler} icon='block' color='red' />
    </div>
  )
}

export default IconPickerContainer
