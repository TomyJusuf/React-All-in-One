// Importing necessary libraries and components
import React from 'react'
import ReactDOM from 'react-dom/client'
import Book from './components/Book'
import './css/index.css'
import { book1, book2, book3 } from './data/myData.js'

// Define the BookList component
function BookList() {
  // Create an array of book objects using imported data
  const books = [book1, book2, book3]

  // Return a section element containing a list of Book components
  // Each Book component is passed a book object as a prop
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book, index) => {
        return <Book {...book} key={index} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e)
    // e.target - element
    console.log(`Input Name : ${e.target.name}`)
    console.log(`Input Value : ${e.target.value}`)
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* add button with type='submit' */}
        <button type="submit">submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}

// Create a root element using ReactDOM for rendering the component tree
const root = ReactDOM.createRoot(document.getElementById('root'))
// Render the BookList component into the root element
root.render(<BookList />)
