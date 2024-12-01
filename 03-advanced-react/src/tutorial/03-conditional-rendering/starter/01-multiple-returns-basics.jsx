import { useEffect, useState } from 'react'

const MultipleReturnsBasics = () => {
  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false)
    }, 3000)
  }, [])

  return (
    <>
      <h2>Multiple Returns Basics</h2>
      {isLoaded ? <h2>Loading...</h2> : <h2>My App</h2>}
    </>
  )
}
export default MultipleReturnsBasics
