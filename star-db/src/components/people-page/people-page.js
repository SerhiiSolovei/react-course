import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';

import './people-page.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  };

  onSelectedPerson = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    };

    const itemList = (
      <ItemList
        onItemSelected={this.onSelectedPerson}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) => (`${name} (${gender}, ${birthYear})`)}/>
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson}/>
    );

    return (
      <div>
        <Row left={itemList} right={personDetails}/>
      </div>
    );
  };
};
