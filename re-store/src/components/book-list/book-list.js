import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import Spinner from '../spinner'
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import ErrorIndicator from '../error-indicator';
import { compose } from '../../utils';

import './book-list.css';

const BookList = ({books, bookAddedToCart}) => {
 return (
  <ul className="book-list">
    {
      books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} bookAddedToCart={() => bookAddedToCart(book.id)}/>
          </li>
        );
      })
    }
  </ul>
);
};

class BookListContainer extends Component {

  componentDidMount () {
    this.props.fetchBooks();
  };

  render () {
    const { books, loading, error, bookAddedToCart } = this.props;

    if (loading) {
      return <Spinner />
    };

    if (error !== null) {
      return <ErrorIndicator />
    }

    return <BookList books={books} bookAddedToCart={bookAddedToCart}/>
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
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    bookAddedToCart: (id) => dispatch(bookAddedToCart(id))
  }
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps,mapDispatchToProps))(BookListContainer)
