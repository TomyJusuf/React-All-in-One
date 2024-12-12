import { useState } from 'react'
import { data } from '../../../data'
const UserChallenge = () => {
  const [newData, setNewData] = useState(data)
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const newId = Date.now()

    setNewData([...newData, { id: newId, name: name }])
    setName('')
  }
  function removeUser(e) {
    const name = e.target.parentNode.children[0].textContent
    const updatedUsers = newData.filter((user) => user.name !== name)
    setNewData(updatedUsers)
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {newData.map((user, index) => {
        return (
          <div key={index}>
            <h4>{user.name}</h4>
            <button type="button" className="btn" onClick={removeUser}>
              remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
