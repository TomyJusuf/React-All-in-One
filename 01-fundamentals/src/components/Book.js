import React from 'react'
import Image from './Image'
import Title from './Title'
import Author from './Author'
/**
 * Book component: render a single book with its image, title and author
 * @param {Object} books - object with the book's data
 * @returns {ReactElement} A ReactElement representing a single book
 */
const Book = (books) => {
  const { img, title, author, displayValue } = books

  return (
    <article className="book">
      {/* /* Renders the book's image */}
      <Image image={img} alt={title} />
      {/* Renders the book's title */}
      <Title titles={title} displayValues={displayValue} />

      {/* Renders the book's author */}
      <Author author={author} />
    </article>
  )
}

export default Book
