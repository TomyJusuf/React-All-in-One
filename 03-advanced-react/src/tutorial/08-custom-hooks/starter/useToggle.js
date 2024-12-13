import { useState } from 'react'
const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue)
  const toggle = () => {
    setShow((prevShow) => !prevShow) // Correct state update
  }
  return { show, toggle } // Return both state and toggle function
}

export default useToggle
