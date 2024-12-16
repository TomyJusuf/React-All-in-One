import NavLinks from './NavLinks'
import { useState, createContext, useContext } from 'react'

export const NavbarContext = createContext()

// custom hook
export const useAppContext = () => {
  return useContext(NavbarContext)
}
const Navbar = () => {
  const [user, setUser] = useState({ name: 'tony stark' })
  function logout() {
    setUser(null)
  }

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}
export default Navbar
