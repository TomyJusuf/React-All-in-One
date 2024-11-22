const ErrorExample = () => {
  let count = 0

  const handleClick = () => {
    count++
    console.log(count)
  }
  return (
    <div className="">
      <h2>{count}</h2>
      <button type="button" onClick={handleClick} className="btn">
        click me
      </button>
    </div>
  )
}

export default ErrorExample
