export function manageFriends(state = {friends: []}, action){
  switch (action.type) {
    case "ADD_FRIEND":
      state.friends.push(action.friend)
      return state
    case "REMOVE_FRIEND":
      let indexToRemove = state.friends.findIndex(friend => friend.id == action.id)

      return ({
        ...state,
        friends: [
          ...state.friends.slice(0, indexToRemove),
          ...state.friends.slice(indexToRemove + 1)
        ]
      })
    default:
      return state;
  }
}

// var found = array.find(function(element) {
//   return element > 20;
// });
