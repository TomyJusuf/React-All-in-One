import { ToastContainer } from 'react-toastify'
import { nanoid } from 'nanoid'
import Form from './Form'
import Items from './Items'
import { useEffect, useRef, useState } from 'react'
import { instance } from './axios/utils'
import { useQuery } from '@tanstack/react-query'

const App = () => {
  const fetchTasks = async () => {
    try {
      const { data } = await instance.get('/')
      return data.taskList
    } catch (error) {
      throw new Error('Something went wrong', error.response)
    }
  }
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTasks,
  })

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form />
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error.message}</h2>}
      {data && <Items items={data} />}
    </section>
  )
}
export default App
