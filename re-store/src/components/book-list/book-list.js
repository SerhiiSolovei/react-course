import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner'
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import ErrorIndicator from '../error-indicator';
import { compose } from '../../utils';

import './book-list.css';

class BookList extends Component {

  componentDidMount () {
    this.props.fetchBooks();
  };

  render () {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />
    };

    if (error !== null) {
      return <ErrorIndicator />
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            );
          })
        }
      </ul>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;

  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)));
    }
  }
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps,mapDispatchToProps))(BookList)
