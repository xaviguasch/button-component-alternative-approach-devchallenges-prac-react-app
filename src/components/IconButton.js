import './IconButton.css'

const IconButton = (props) => {
  const clickHandlerIcon = () => {
    props.pickIcon(props.icon)
  }

  return (
    <button className={`btn btn--icon ${props.color}`} onClick={clickHandlerIcon}>
      <span className='material-icons'>{props.icon}</span>
    </button>
  )
}

export default IconButton
