import React from 'react'
import Image from './Image'
import Title from './Title'
import Author from './Author'
const Book = ({ books }) => {
  console.log(books)
  return (
    <article className="book">
      <Image img={books} />
      <Title title={books} />
      <Author author={books} />
    </article>
  )
}
export default Book
