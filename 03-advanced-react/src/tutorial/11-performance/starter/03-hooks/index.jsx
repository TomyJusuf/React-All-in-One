import Count from './Count'
import { useState, useCallback, memo } from 'react'
import { data } from '../../../../data'
import List from './List'
const LowerState = () => {
  const [people, setPeople] = useState(data)
  const [count, setCount] = useState(0)

  const countFN = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const removePerson = useCallback(
    (id) => {
      console.log(people)
      setPeople((prev) => prev.filter((person) => person.id !== id))
    },
    [people]
  )
  return (
    <section>
      <Count count={count} countFN={countFN} />
      <List people={people} removePerson={removePerson} />
    </section>
  )
}
export default memo(LowerState)
