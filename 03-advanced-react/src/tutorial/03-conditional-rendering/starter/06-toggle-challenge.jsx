import { useState } from 'react'

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false)

  function handleClick() {
    setShowAlert(!showAlert)
  }

  return (
    <>
      <h2>toggle challenge</h2>
      <button type="button" className="btn" onClick={() => handleClick()}>
        {showAlert ? 'hide alert' : 'show alert'}
      </button>
      {showAlert && <p>please watch the video</p>}
    </>
  )
}

export default ToggleChallenge
