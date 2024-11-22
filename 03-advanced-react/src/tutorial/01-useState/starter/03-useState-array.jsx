import { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    const newPerson = people.filter((person) => person.id !== id)
    setPeople(newPerson)
  }

  return (
    <>
      <h2>useState array example</h2>
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clean list
      </button>

      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removePerson(id)}>
              remove
            </button>
          </div>
        )
      })}
    </>
  )
}

export default UseStateArray
