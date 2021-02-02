import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails } from '../sw-components';


import './app.css';
import ErrorBoundary from '../error-boundary';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };


  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({ hasError: true});
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    };

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;


    const { getPerson, getStarship, getPersonImage, getStarshipImage, getAllPeople, getAllStarships, getAllPlanets } = this.swapiService;
    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>

        <Record field="gender" label="Gender"/>
        <Record field="birthYear" label="Birth Year"/>
      </ItemDetails>
    );


    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>
      </ItemDetails>
    );
    return (
      <ErrorBoundary>
      <div className="stardb-app">
        <Header />
        {/* { planet }

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage /> */}

        {/* <div className="row mb2">
          <div className="col-md-6"> */}

          {/* </div> */}
          {/* <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div> */}
        {/* </div> */}

        {/* <div className="row mb2">
          <div className="col-md-6"> */}

          <PersonDetails itemId={11}/>
          <PlanetDetails itemId={2}/>
          <StarshipDetails itemId={9}/>

          <PersonList />

          <StarshipList />

          <PlanetList />

          {/* </div> */}
          {/* <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div> */}
        {/* </div> */}

        {/* <Row left={personDetails} right={starshipDetails}/> */}

      </div>
      </ErrorBoundary>
    );
  };
};
