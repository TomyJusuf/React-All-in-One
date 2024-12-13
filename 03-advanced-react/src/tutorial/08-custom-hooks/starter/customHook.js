import { useEffect, useState } from 'react'

const customHook = (url) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const response = await fetch(url)
        if (!response.ok) {
          setIsError(true)
          setIsLoading(false)
          return
        }
        const data = await response.json()
        setUser(data)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return [isLoading, isError, user]
}
export default customHook
