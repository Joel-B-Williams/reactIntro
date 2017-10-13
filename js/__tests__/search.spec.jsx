import React from 'react';
// import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'; // uses renderer under the hood so can't have both imported
import preload from '../../data.json';
import Search from '../search';
import Showcard from '../showcard';

//this is (currently) just jasmine, so you can do describe('') do//end if you want 

// shallow/enzyme separates components from parents so if component fails, the parent test can still pass.  Allows for better zoning in on real problem. 
// shallow is also really fast, so using just it means zippy zippy tests 
test('Search renders correctly', () => {
  // const component = renderer.create(<Search />)
  const component = shallow(<Search />)
  // const tree = component.toJSON();
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search />)
  //.find works on react components as well as css/html 
  expect(component.find(Showcard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on search term', () => {
  // simulating entering things into search bar - normally don't repeat the logic, pull it into module
  const component = shallow(<Search />)
  const searchWord = 'black';
  component.find('input').simulate('change', {target:{value:searchWord}})
  // will look at what's actually rendered instead of hardcoded number so you don't have to change test if app data changes 
  const showCount = preload.shows.filter(show => 
    `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(Showcard).length).toEqual(showCount);
});
xtest('xtest will not run hurray', () => {})