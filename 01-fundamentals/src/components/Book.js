import React from 'react'
import Image from './Image'
import Title from './Title'
import Author from './Author'
/**
 * Book component: render a single book with its image, title and author
 * @param {Object} books - object with the book's data
 * @returns {ReactElement} A ReactElement representing a single book
 */
const Book = ({ books }) => {
  // console.log(books) // prints the book's data to the console
  return (
    <article className="book">
      {/* Renders the book's image */}
      <Image img={books} />
      {/* Renders the book's title */}
      <Title title={books} />
      {/* Renders the book's author */}
      <Author author={books} />
    </article>
  )
}

export default Book
