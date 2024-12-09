import { useState } from 'react'

const ShortCircuitOverview = () => {
  // falsy
  const [userName, setUserName] = useState('')
  // truthy
  const [test, setText] = useState('abc')
  const codeExample = userName || 'hello world'
  return (
    <>
      <h4>Default value : {codeExample} </h4>
      <h4>Falsy or (||): {userName || codeExample}</h4>
      <h4>Falsy and (&&) : {userName && codeExample}</h4>
      <h4>truthy or (||) : {test || codeExample}</h4>
      <h4>truthy and (&&) : {test && codeExample}</h4>
    </>
  )
}
export default ShortCircuitOverview
