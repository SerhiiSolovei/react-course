import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner'
import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import ErrorIndicator from '../error-indicator';
import { compose } from '../../utils';

import './book-list.css';

class BookList extends Component {

  componentDidMount () {
    // 1. receive data
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError } = this.props;

    booksRequested();
    bookstoreService.getBooks()
      .then((data) => booksLoaded(data)) // 2. dispatch data to store
      .catch((error) => booksError(error));
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({booksLoaded, booksRequested, booksError}, dispatch);
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps,mapDispatchToProps))(BookList)
