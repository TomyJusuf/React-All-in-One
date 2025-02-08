import { useState, useContext } from 'react'
import { HiMiniSun } from 'react-icons/hi2'
import { FaMoon } from 'react-icons/fa'
import { useGlobalContext } from './context'
const ThemeToggle = ({ toggle }) => {
  const [isDarkTheme, setDarkTheme] = useState(false)

  function toggleDarkTheme() {
    setDarkTheme(!isDarkTheme)
    toggle(!isDarkTheme)
  }

  return (
    <div className="toggle-container">
      <button type="button" className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <FaMoon className="toggle-icon" />
        ) : (
          <HiMiniSun className="toggle-icon" />
        )}
      </button>
    </div>
  )
}
export default ThemeToggle
