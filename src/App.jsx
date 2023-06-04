import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import RestaurantSearch from './components/RestaurantSearch';
import NewRestaurant from './components/NewRestaurant';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={RestaurantSearch} />
        <Route path="/new" component={NewRestaurant} />
      </Switch>
    </Router>
  );
}

export default App;

