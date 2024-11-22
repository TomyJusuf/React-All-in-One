import { useState } from 'react'
const UseStateBasics = () => {
  const [count, setCount] = useState(0)
  const countValueFn = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h2>useState basics</h2>
      <h2>{count}</h2>
      <button type="button" onClick={countValueFn}>
        Count
      </button>
    </>
  )
}

export default UseStateBasics
