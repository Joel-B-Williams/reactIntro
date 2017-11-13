import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './landing';
import Search from './search';
import Details from './details';
import preload from '../data.json';

// no curlies because this is a single-line (technically) and uses implicit return
const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        {/* this is how you write comments inside here*/}
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
      {/*pass Details as a component so you can give it props, in this case a function to find the correct show by imbdID*/}
        <Route 
          path="/details/:id" 
          component={props => 
            <Details 
              show={preload.shows.find((show) => props.match.params.id === show.imdbID)} {...props} />} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;