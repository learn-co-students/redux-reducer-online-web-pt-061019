export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };
    case "REMOVE_FRIEND":
      const newFriends = [];
      for (const friend of state.friends) {
        if (friend.id !== action.id) {
          newFriends.push(friend);
        }
      }
      return {
        ...state,
        friends: newFriends
      };
    default:
      return state;
  }
}
