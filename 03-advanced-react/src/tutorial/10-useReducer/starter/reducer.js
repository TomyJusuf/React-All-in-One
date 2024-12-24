import { data } from '../../../data'

// This is the reducer function that takes in the current state and action
// and returns a new state based on the action type
const reducer = (state, action) => {
  switch (action.type) {
    // REMOVE item from the list
    // We filter the people array to remove the item with the id
    // matching the payload of the action
    case 'REMOVE_ITEM':
      return {
        people: state.people.filter(
          (person) => person.id !== action.payload.id
        ),
      }

    // RESET the list to the original state
    // We set the people array to the original data
    case 'RESET_LIST':
      return { people: data }

    // CLEAR the list
    // We set the people array to an empty array
    case 'CLEAR_LIST':
      return { people: [] }
    // If none of the above cases match, throw an error
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

// Export the reducer function
export default reducer
