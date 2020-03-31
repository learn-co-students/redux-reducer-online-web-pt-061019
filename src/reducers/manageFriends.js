export function manageFriends(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return { ...state, friends: [...state.friends, action.friend] };
    //   return { ...state, friends: state.friends.concat(action.friend)}
    case 'REMOVE_FRIEND':
      const newFriendSet = state.friends.filter((f) => f.id !== action.id);
      return { ...state, friends: newFriendSet };
    default:
      return state;
  }
}

// concat() method is used to join two or more strings. This method does not change the existing strings, but returns a new string containing the text of the joined strings.
