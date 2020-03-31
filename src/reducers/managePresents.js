export function managePresents(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return { ...state, numberOfPresents: state.numberOfPresents + 1 };
    default:
      return state;
  }
}

// An alternative approach is to use the object spread syntax, which lets you use the spread (...) operator to copy enumerable properties from one object to another in a more succinct way
// This would translate to the same English, "Return a new object that contains all the key-value pairs from dog copied over with the age key overwritten with a new value".
