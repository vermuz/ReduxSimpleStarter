// Reducers are only called when there is an action

// State argument is not application state,
// only the state this reducer is reponsible for
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    // On opening the app up the first time,
    // User hasnt clicked anything, so we 
    // are just returning state
    return state;
}

// Note
// Redux does not allow to return undefined from reducer
// it will return an error
// Always want to return a fresh object
