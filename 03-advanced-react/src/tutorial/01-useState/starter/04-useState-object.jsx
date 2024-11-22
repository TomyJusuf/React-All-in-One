import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Tomas',
    age: 36,
    hobby: 'Programming',
  })
  function displayPerson() {
    setPerson({
      name: 'john',
      age: 28,
      hobby: 'scream at the computer',
    })
  }

  const { name, age, hobby } = person
  return (
    <>
      <h2> useState object example</h2>
      <h5>name : {name}</h5>
      <h5>age : {age}</h5>
      <h5>hobby : {hobby}</h5>
      <button className="btn" type="button" onClick={displayPerson}>
        Change me
      </button>{' '}
    </>
  )
}

export default UseStateObject
