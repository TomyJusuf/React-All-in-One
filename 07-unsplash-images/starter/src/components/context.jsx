import { createContext, useContext, useState } from 'react'
import { instance } from '../axios/utils'
export const ThemeApiContext = createContext(null)

export const ApiProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('cat')
  const updateSearchTerm = (newTerm) => {
    setSearchTerm(newTerm)
  }
  return (
    <ThemeApiContext.Provider value={{ searchTerm, updateSearchTerm }}>
      {children}
    </ThemeApiContext.Provider>
  )
}

export const useGlobalContext = () => useContext(ThemeApiContext)
