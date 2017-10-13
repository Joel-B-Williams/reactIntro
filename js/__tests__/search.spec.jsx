import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'; // uses renderer under the hood so can't have both imported
import Search from '../search';

//this is (currently) just jasmine, so you can do describe('') do//end if you want 

// shallow/enzyme separates components from parents so if component fails, the parent test can still pass.  Allows for better zoning in on real problem. 
// shallow is also really fast, so using just it means zippy zippy tests 
test('Search renders correctly', () => {
  // const component = renderer.create(<Search />)
  const component = shallow(<Search />)
  // const tree = component.toJSON();
  expect(component).toMatchSnapshot();
})