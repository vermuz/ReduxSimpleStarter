// Utilize action creator in other places
// Ensure action returned from here, ends up running
// in all reducers

// Also we need to wire this action creator to redux
export function selectBook(book) {
    console.log('A book has been selected:', book.title);
}
