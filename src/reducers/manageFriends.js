export function manageFriends(state = {friends: []}, action){
    let unfriend = state.friends.findIndex(friend => friend.id === action.id)
    switch(action.type){
        case "ADD_FRIEND":
            return {...state, friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            return {...state, friends: [...state.friends.slice(0, unfriend), 
                ...state.friends.slice(unfriend + 1)]}
        default:
            return state
    }
}
