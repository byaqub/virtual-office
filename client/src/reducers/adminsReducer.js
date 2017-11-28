import { FETCH_ADMINS } from '../actions'

export default (state = ["Bob", "Cameron", "Dwight", "Emilia"], action) => {
  switch (action.type) {

    case FETCH_ADMINS:
      return state

    default:
      return state
  }
}
