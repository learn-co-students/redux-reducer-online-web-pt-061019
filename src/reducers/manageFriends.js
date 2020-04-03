export function manageFriends(state, action){
    switch (action.type){
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            const newFriendState = state.friends.filter(f => f.id !== action.id)
            return {...state, friends: newFriendState}
        default: return state;
    }
}
