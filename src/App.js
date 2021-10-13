import React, { useState } from 'react'

import FinalButton from './components/FinalButton'
import ClrPickerContainer from './components/ClrPickerContainer'
import IconPickerContainer from './components/IconPickerContainer'
import Form from './components/Form'
import Dropdown from './components/Dropdown'

import './App.css'

function App() {
  const [color, setColor] = useState('')
  const [icon, setIcon] = useState([])
  const [boxShadow, setBoxShadow] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [styleOption, setStyle] = useState('Default')
  const [sizeOption, setSize] = useState('Small')

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
      <h1>Custom button</h1>

      <FinalButton
        colorSetter={color}
        icon={icon}
        boxShadowSetter={boxShadow}
        boxShadow={boxShadow}
        disabled={disabled}
        style={styleOption}
        size={sizeOption}
      />

      <Dropdown
        getOptionPicked={changeOption}
        options={['Default', 'Outline', 'Text']}
        style={styleOption}
        type='style'
      />
      <Dropdown
        getOptionPicked={changeOption}
        options={['Small', 'Medium', 'Large']}
        size={sizeOption}
        type='size'
      />

      <Form getCheckboxInfo={changeBoxShadow} camp={'Box Shadow'} />
      <Form getCheckboxInfo={changeDisabled} camp={'Disabled'} />

      <IconPickerContainer getIcon={addIcons} />
      <ClrPickerContainer getColor={changeColor} />
    </div>
  )
}

export default App
