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
      {books.map((book, index) => {
        return <Book {...book} key={index} />
      })}
    </section>
  )
}

// Create a root element using ReactDOM for rendering the component tree
const root = ReactDOM.createRoot(document.getElementById('root'))
// Render the BookList component into the root element
root.render(<BookList />)
