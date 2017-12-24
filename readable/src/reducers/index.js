import {
  CREATE_POST,
  EDIT_POST,
  REMOVE_POST
} from '../actions'

function post(state = {}, action) {

  const { id, timestamp, title, body, author, category, voteScore, deleted } = action

  switch (action.type) {

    case CREATE_POST:
      return {}
    case EDIT_POST:
      return {}
    case REMOVE_POST:
      return {}
    default:
      return state
  }
}

export default post;
