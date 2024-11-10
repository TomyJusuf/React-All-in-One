import React from 'react'
import ReactDOM from 'react-dom/client'
import Book from './components/Book'
import './css/index.css'
import { book1, book2, book3 } from './data/myData.js'

function BookList() {
  const books = [book1, book2, book3]

  return (
    <section className="booklist ">
      {books.map((book, index) => (
        <Book books={book} key={index} />
      ))}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
