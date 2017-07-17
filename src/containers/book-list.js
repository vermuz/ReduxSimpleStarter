import React, {Component} from 'react';
import { connect } from 'react-redux';

// Container react component, direct connection to state managed by redux
// React Redux have to be combined.
// On forging a connection between react and redux
// it turns a component into a container

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// GLUE between react and redux
// Take our application state as an argument
// Change in state = re-rendering
function mapStatetoProps(state) {
    // Whatever is returned here will show up as props
    // inside of booklist
    // This returned object is available to renderList as props
    return {
        books: state.books
    };       
}

// Connect function
// Take map state and return container
// Takes a function and a component and produces a container
// A container is aware of the state
export default connect(mapStatetoProps)(BookList);
