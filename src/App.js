import React, { useState } from 'react'

import FinalButton from './components/FinalButton'
import ClrPickerContainer from './components/ClrPickerContainer'
import IconPicker from './components/IconPicker'
import Form from './components/Form'
import Dropdown from './components/Dropdown'

import './App.css'

function App() {
  const [color, setColor] = useState('')
  const [icon, setIcon] = useState([])
  const [boxShadow, setBoxShadow] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [styleOption, setStyle] = useState('default')
  const [sizeOption, setSize] = useState('small')

  const changeColor = (color) => {
    setColor(color)
  }

  const addIcons = (icon) => {
    setIcon(icon)
  }

  const changeBoxShadow = (checked) => {
    setBoxShadow((prevCheck) => !prevCheck)
  }
  const changeDisabled = (checked) => {
    setDisabled((prevCheck) => !prevCheck)
  }

  const changeOption = (option) => {
    if (option[0] === 'style') {
      console.log(option)
      setStyle(option[1])
    } else if (option[0] === 'size') {
      console.log(option)
      setSize(option[1])
    }
  }

  return (
    <div className='App'>
      <div className='wrapper'>
        <h1 className='title'>Custom button</h1>

        <FinalButton
          colorSetter={color}
          icon={icon}
          boxShadowSetter={boxShadow}
          boxShadow={boxShadow}
          disabled={disabled}
          style={styleOption}
          size={sizeOption}
        />

        <div className='group'>
          <Dropdown
            getOptionPicked={changeOption}
            options={['default', 'outline', 'text']}
            style={styleOption}
            type='style'
          />
          <Dropdown
            getOptionPicked={changeOption}
            options={['small', 'medium', 'large']}
            size={sizeOption}
            type='size'
          />
        </div>

        <div className='group'>
          <Form getCheckboxInfo={changeBoxShadow} camp={'Box Shadow'} />
          <Form getCheckboxInfo={changeDisabled} camp={'Disabled'} />
        </div>

        <IconPicker getIcon={addIcons} />

        {styleOption === 'default' && !disabled && (
          <ClrPickerContainer getColor={changeColor} />
        )}
      </div>
    </div>
  )
}

export default App
