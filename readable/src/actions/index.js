export const CREATE_POST = 'CREATE_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'

export function createPost({ id, timestamp, title, body, author, category, voteScore, deleted }) {
  return{
    type: CREATE_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted,
  }
}
export function loadCategories({categories}) {
  return {
    type: LOAD_CATEGORIES,
    categories
  }
}
