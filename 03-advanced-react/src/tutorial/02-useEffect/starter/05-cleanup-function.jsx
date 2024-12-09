import { useEffect, useState } from 'react'
const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <h2>cleanup function</h2>
      <button type="button" className="btn" onClick={() => setToggle(!toggle)}>
        {toggle ? 'hide' : 'show'}
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    // const intID = setInterval(() => {
    // console.log('Hello from setInterval')
    // }, 1000)
    // return () => clearInterval(intID)

    const someFn = () => {
      // some logic
    }
    window.addEventListener('scroll', someFn())
    return () => window.removeEventListener('scroll', someFn())
  }, [])
  return <h1>hello there</h1>
}

export default CleanupFunction
