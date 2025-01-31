import { instance } from './axios/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
const SingleItem = ({ item }) => {
  const queryClient = useQueryClient()

  const mutationDelete = useMutation({
    mutationFn: (taskId) => instance.delete(`/${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
      toast.success('Task deleted successfully', { theme: 'colored' })
    },
  })

  const mutationCheck = useMutation({
    mutationFn: (taskId) =>
      instance.patch(`/${taskId}`, { isDone: item?.isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
      toast.warning('Task updated successfully', { theme: 'colored' })
    },
  })

  const checkTask = () => {
    item.isDone = !item.isDone
    mutationCheck.mutate(item.id)
  }

  // delete fn
  const deleteTasks = () => {
    mutationDelete.mutate(item.id)
  }

  return (
    <div className="single-item">
      <input type="checkbox" checked={item.isDone} onChange={checkTask} />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.isDone && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={deleteTasks}
        disabled={mutationDelete.isLoading}
      >
        {mutationDelete.isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  )
}
export default SingleItem
