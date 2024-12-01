import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const resp = await fetch(url)
        if (!resp.ok) {
          throw new Error(`${resp.status} ${resp.statusText}`)
        }
        const user = await resp.json()
        setUser(user)
        setIsError(false) // Ensure error state is reset
      } catch (error) {
        setIsError(true)
        setErrorMessage(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{`Error: ${errorMessage.message}`}</h2>
  }
  const { name, company, bio, avatar_url } = user
  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default MultipleReturnsFetchData
