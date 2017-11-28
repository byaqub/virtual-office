import { FETCH_ACTIVE_MAIL, DELETE_MAIL } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {

    case FETCH_ACTIVE_MAIL:
      return action.payload;
    case DELETE_MAIL:
      return {};
    default:
      return state
  }
}