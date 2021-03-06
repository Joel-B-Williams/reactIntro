import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom';
// a bunch of little binders to make using redux in react easier
import { Provider } from 'react-redux';
// Provider needs a store to work with
import store from './store';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

// no curlies because this is a single-line (technically) and uses implicit return
const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div className="app">
        <Switch>
          {/* this is how you write comments inside here*/}
          <Route exact path="/" component={Landing} />
          <Route 
            path="/search" 
            component={props => 
              <Search shows={preload.shows} {...props} />} />
        {/*pass Details as a component so you can give it props, in this case a function to find the correct show by imbdID*/}
          <Route 
            path="/details/:id" 
            component={(props: { match: Match }) => 
              <Details 
                show={preload.shows.find((show) => 
                  props.match.params.id === show.imdbID)} {...props} 
              />
            } 
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;