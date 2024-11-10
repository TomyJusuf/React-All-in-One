const Title = ({ titles, displayValues }) => {
  return (
    <section>
      <div>{<h2>{titles}</h2>}</div>
      <button onClick={displayValues}>Click me</button>
    </section>
  )
}
export default Title
