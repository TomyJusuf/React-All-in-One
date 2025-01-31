import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { instance } from './axios/utils'
import { toast, ToastContainer } from 'react-toastify'
const Form = () => {
  const [newItemName, setNewItemName] = useState('')
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (newTodo) => instance.post('/', newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
      toast.success('Task added successfully', { theme: 'colored' })
      setNewItemName('')
    },
    onError: (error) => {
      console.error(error) // Debugging
      toast.error(
        error.response?.data?.message ||
          error.messag ||
          error.response.statusText ||
          'An unknown ror occurred'
      )
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    mutation.mutate({ title: newItemName })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <ToastContainer position="top-center" />
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          add task
        </button>
      </div>
    </form>
  )
}
export default Form
