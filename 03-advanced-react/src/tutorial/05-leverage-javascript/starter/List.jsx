import { Person } from './Person'
import { people } from '../../../data.js'
const List = () => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </div>
  )
}
export default List
