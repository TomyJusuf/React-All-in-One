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
  const { img, title, author, id, bookIndex } = books

  return (
    <article className="book" id={id}>
      <Image image={img} alt={title} />

      <Title titles={title} />

      <Author author={author} />
      <span className="number">{`# ${bookIndex + 1}`}</span>
    </article>
  )
}

export default Book
