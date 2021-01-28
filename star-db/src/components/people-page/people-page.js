import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorBoundary from '../error-boundary';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';

import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  };

  onSelectedPerson = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onSelectedPerson}
        getData={this.swapiService.getAllPeople}>

        {(item) => (`${item.name} (${item.birthYear})`)}
      </ItemList>
    );

    const itemDetails = (
      <ErrorBoundary>
        <ItemDetails personId={this.state.selectedPerson}/>
      </ErrorBoundary>
    );

    return (
      <Row left={itemList} right={itemDetails}/>
    );
  };
};
