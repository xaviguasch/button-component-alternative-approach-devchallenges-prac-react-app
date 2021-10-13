import React, { useState } from 'react'

import './Form.css'

const Form = (props) => {
  const [checkBoxValue, setcheckBoxValue] = useState(false)

  const submitHandler = (e) => {
    setcheckBoxValue((prevState) => !prevState)
    props.getCheckboxInfo(checkBoxValue)
  }

  return (
    <form>
      <div>
        <label className='item-label' htmlFor=''>
          <input
            type='checkbox'
            name=''
            id=''
            onChange={submitHandler}
            checked={checkBoxValue}
          />
          {props.camp}
        </label>
      </div>
    </form>
  )
}

export default Form
