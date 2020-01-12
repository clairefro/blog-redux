export default function(state = [], action) {
  switch (action.type) {
    case 'TEST':
      return 'don something';
    default:
      return state;
  }
}
