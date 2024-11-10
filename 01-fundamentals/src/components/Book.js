import React from 'react'
import Image from './Image'
import Title from './Title'
import Author from './Author'
/**
 * Book component: render a single book with its image, title and author
 * @param {Object} books - object with the book's data
 * @returns {ReactElement} A ReactElement representing a single book
 */
const Book = (props) => {
  const { author, title, image, children } = props
  console.log(props)
  return (
    <article className="book">
      {/* /* Renders the book's image */}
      <Image img={image} />
      {/* Renders the book's title */}
      <Title title={title} />
      {/* Renders the book's author */}
      <Author author={author} />
      {/* Renders the children passed as props */}
      {children}
    </article>
  )
}

export default Book
