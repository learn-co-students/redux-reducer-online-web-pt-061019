export function manageFriends(state, action){
    state = {
        friends: [],
    }

    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: state.friends.push(action.friend = {...friend, name, hometown, id})}
        // case 'REMOVE_FRIEND':
        //     return {}
        default: 
            return state;
    }
}
