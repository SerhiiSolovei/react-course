import React, { Component } from 'react';
import ErrorButton from '../error-button';

import './item-details.css';

const Record = ({ item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span>{ item[field] }</span>
    </li>
  );
};


export {
  Record
};

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null
    // loading: true
  };

  componentDidMount() {
    this.updateItem();
  };

  componentDidUpdate (prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  };

  // onPersonLoaded = (person) => {
  //   return this.setState({
  //     person,
  //     loading: false
  //   });
  // };

  updateItem () {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    };

    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          image: getImageUrl(item)});
      });
  };

  render() {
    if (!this.state.item) {
      return <span>Select a person from a list</span>
    };

    const { item, image } = this.state;
    const { name } = item;
    // const { loading } = this.state;

    // const spinner = loading ? <Spinner /> : null;

    return (
      <div className="person-details card">
        {/* {spinner} */}
        <img className="person-image"
          src={image} alt="person" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            { React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item })
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    )
  }
}
