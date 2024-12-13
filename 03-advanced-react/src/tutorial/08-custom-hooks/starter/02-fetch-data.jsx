const url = 'https://api.github.com/users/QuincyLarson'
import customHook from './customHook'
const FetchData = () => {
  const [isLoading, isError, user] = customHook(url)

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }
  if (!user) {
    return <h2>No user data found</h2>
  }
  const { avatar_url, name, company, bio } = user
  console.log(avatar_url) //<-- problem with promise

  return (
    <div>
      <img
        style={{ width: '100px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default FetchData
