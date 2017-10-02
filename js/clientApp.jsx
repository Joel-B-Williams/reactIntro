import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './landing';
import Search from './search';
// no curlies because this is a single-line (technically) and uses implicit return
const FourOhFour = () => <h1>404</h1>;

const App = () =>
	<BrowserRouter>
		<div className="app">
			<Switch>
				{/* this is how you write comments inside here*/}
				<Route exact path="/" component={Landing} />
				<Route path="/search" component={Search} />
				<Route component={FourOhFour} />
			</Switch>
		</div>
	</BrowserRouter>;

render(<App />, document.getElementById('app'));

// INTRO STUFFS & NOTES
// const ce = React.createElement;

// const MyTitle = function(props) {
//   // props = variable like anything else, but convention says 'use props'
//   // type, attributes/props, children
//   // return React.createElement('div', null, ce('h1', { style: { color: props.color } }, props.title));
//   // Well this looks familiar - .jsx allows you to write actual HTML instead of the above which is designed to mimick it.  Cool.
//   return (
//     <div>
//       <h1 style={{color: props.color}}>{props.title}</h1>
//     </div>
//   );
// };

// const MyFirstComponent = function() {
//   // return React.createElement(
//   //   'div',
//   //   null,
//   //   ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
//   //   ce(MyTitle, { title: 'Silicon Valley', color: 'BlanchedAlmond' }),
//   //   ce(MyTitle, { title: 'Rick & Morty', color: 'RebeccaPurple' }),
//   //   ce(MyTitle, { title: 'Stranger Things', color: 'Peru' })
//   // );
//   return (
//     <div id="my-first-component">
//       <MyTitle title="Game of Thrones" color="YellowGreen"/>
//       <MyTitle title="Silicon Valley" color="BlanchedAlmond"/>
//       <MyTitle title="Rick & Morty" color="RebeccaPurple"/>
//       <MyTitle title="Stranger Things" color="Peru"/>
//       <MyTitle title="Ozark" color="Burlywood"/>
//     </div>
//   );
// };

// render(React.createElement(MyFirstComponent), document.getElementById('app'));
