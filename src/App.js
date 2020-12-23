import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import './App.css';


const Hats = props => {
  return (
    <h1>Hats</h1>
  )
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/hats" component={Hats}/>
        </Switch>
      </div>
    );
  }
}

export default App;