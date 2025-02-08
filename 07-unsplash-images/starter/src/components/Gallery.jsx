import { useQuery, QueryClient } from '@tanstack/react-query'
import { instance } from '../axios/utils'
import { useGlobalContext } from './context'
import { useState } from 'react'
const Gallery = () => {
  const my_key = import.meta.env.VITE_ACCESS_KEY
  const { searchTerm } = useGlobalContext()
  const [page, setPage] = useState(1)
  const perPage = 10

  const { isLoading, isError, data, isFetching } = useQuery({
    queryKey: ['photos', searchTerm, page],
    queryFn: async () => {
      const { data } = await instance.get('/search/photos', {
        params: {
          query: searchTerm,
          client_id: my_key,
          page: page, // Use the current page number
          per_page: perPage, // Limit the number of items per page
        },
      })
      // console.log(data)
      return data
    },

    enabled: !!searchTerm, // Only run the query if there is a search term
  })
  const totalPages = data?.total_pages || 1
  console.log(data)
  const handlePageChange = (newPage) => {
    if (newPage >= 1) {
      setPage(newPage) // Update the page number
    }
  }
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    )
  }

  const results = data.results
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    )
  }

  return (
    <>
      <section className="image-container">
        {results.map((item) => {
          const url = item?.urls?.regular
          return (
            <img
              src={url}
              key={item.id}
              alt={item.alt_description}
              className="img"
            ></img>
          )
        })}
      </section>
      {/* Pagination Controls */}
      <div className="pagination">
        <button
          className="btn"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>

        <span>{`Page ${page} of ${data?.total_pages || 1}`}</span>

        <button
          className="btn"
          onClick={() => handlePageChange(page + 1)}
          disabled={isFetching || page === data?.total_pages}
        >
          Next
        </button>
      </div>
    </>
  )
}
export default Gallery
