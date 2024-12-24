// import {} from './01-useReducer'
import { useReducer } from 'react'
import { data } from '../../../data'
import reducer from './reducer'

const initialState = { people: data }
const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      {state.people?.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id } })}
            >
              remove
            </button>
          </div>
        )
      })}

      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={() => dispatch({ type: 'RESET_LIST' })}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={() => dispatch({ type: 'CLEAR_LIST' })}
        >
          clear
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
