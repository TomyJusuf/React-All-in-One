import { useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((users) => setUsers(users))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h2>github users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default FetchData
