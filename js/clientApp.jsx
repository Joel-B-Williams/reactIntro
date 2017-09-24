import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;
const MyTitle = function(props) {
  // props = variable like anything else, but convention says 'use props'
  // type, attributes/props, children
  return React.createElement('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return React.createElement(
    'div',
    null,
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Silicon Valley', color: 'BlanchedAlmond' }),
    ce(MyTitle, { title: 'Rick & Morty', color: 'RebeccaPurple' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'Peru' })
  );
};

render(React.createElement(MyFirstComponent), document.getElementById('app'));
