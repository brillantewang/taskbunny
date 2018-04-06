import React from 'react';
import { FooterNav } from '../components/footer_nav';
import renderer from 'react-test-renderer';

describe('footer nav', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FooterNav/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  })
})
