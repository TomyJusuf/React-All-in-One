import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  function handleClick() {
    setTimeout(() => {
      console.log('click on button')
      // setValue(value + 1)
      setValue((currentState) => {
        return currentState + 1
      })
    }, 2000)
  }
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>
        click me
      </button>
    </>
  )
}

export default UseStateGotcha
