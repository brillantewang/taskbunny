import React from 'react';
import SplashPage from './splash_page';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<SplashPage/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
