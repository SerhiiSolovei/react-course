const initialState = {
  books: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.paylaod
      };

    default:
      return state;
  };
};

export default reducer;
