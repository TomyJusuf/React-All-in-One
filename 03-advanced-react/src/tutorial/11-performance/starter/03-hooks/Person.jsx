import { memo } from 'react'
const Person = ({ name, id, removePerson }) => {
  // console.log(id)
  return (
    <div>
      <h4>{name}</h4>
      <button type="button" onClick={() => removePerson(id)} className="btn">
        remove
      </button>
    </div>
  )
}
export default memo(Person)
