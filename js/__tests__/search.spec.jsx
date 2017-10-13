import React from 'react';
import renderer from 'react-tests-renderer';
import Search from '../Search';

//this is (currently) just jasmine, so you can do describe('') do//end if you want 
test('Search renders correctly', () => {
  const component = renderer.create(<Search />)
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})