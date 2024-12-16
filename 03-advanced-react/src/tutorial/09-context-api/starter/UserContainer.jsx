import { useAppContext } from './Navbar'

const UserContainer = () => {
  const { users, logout } = useAppContext()
  return (
    <div className="user-container">
      {users ? (
        <>
          <p>hello there, {users.name}</p>
          <button type="button" className="btn" onClick={logout}>
            log out
          </button>
        </>
      ) : (
        <>
          <h4>please login</h4>
          <button type="button" className="btn" onClick={logout}>
            log in
          </button>
        </>
      )}
    </div>
  )
}
export default UserContainer
