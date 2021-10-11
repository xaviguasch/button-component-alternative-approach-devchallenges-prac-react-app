import React, { useState } from 'react'

import FinalButton from './components/FinalButton'
import ClrPickerContainer from './components/ClrPickerContainer'
import IconPickerContainer from './components/IconPickerContainer'
import './App.css'

function App() {
  const [color, setColor] = useState('')

  const changeColor = (color) => {
    setColor(color)
  }

  return (
    <div className='App'>
      <h1>Custom button</h1>
      <FinalButton colorSetter={color} />
      <IconPickerContainer />
      <ClrPickerContainer getColor={changeColor} />
    </div>
  )
}

export default App
