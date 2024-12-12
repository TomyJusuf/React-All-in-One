import { useState } from 'react'
const frameworks = ['react', 'angular', 'vue', 'svelte']

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false)
  const [framework, setFramework] = useState('react')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(framework)
    console.log(shipping)
  }
  function handleShipping(e) {
    setShipping(e.target.checked)
  }
  function handleFramework(e) {
    setFramework(e.target.value)
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((item, index) => {
              return <option key={index}>{item}</option>
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  )
}
export default OtherInputs
