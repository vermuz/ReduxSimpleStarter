// Utilize action creator in other places
// Ensure action returned from here, ends up running
// in all reducers

// Also we need to wire this action creator to redux
export function selectBook(book) {
    // console.log('A book has been selected:', book.title);
    // Enhance action creator, to be able to return
    // a usable action
    
    // selectBook is an Action Creator.
    // It needs to return an action, an object
    // with a type property
    // Every action must have a type
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };

}
