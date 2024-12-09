import { useState } from 'react'

const UserChallenge = () => {
  const [user, setUser] = useState(null)

  function logIn() {
    setUser({ name: 'Tony Stark' })
  }
  function logOut() {
    setUser(null)
  }

  return (
    <>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <h4>hello there, {user.name}</h4>
          <button type="button" className="btn" onClick={logOut}>
            log out
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button type="button" className="btn" onClick={logIn}>
            log in
          </button>
        </div>
      )}
    </>
  )
}

export default UserChallenge
