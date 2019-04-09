import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';
import { movies, actors, directors } from '../data.js'


const App = (props) => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/actors' component={() => <Actors actors={actors} />} />
        <Route exact path='/directors' component={Directors} />
        <Route exact path='/movies' component={Movies} />
      </Fragment>
    </Router>
  );
};

export default App
