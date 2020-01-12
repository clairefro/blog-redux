import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      // action.payload is an array
      return action.payload;
    case FETCH_POST:
      // action.payload is a single object, so make it an array
      return [action.payload];
    default:
      return state;
  }
}
