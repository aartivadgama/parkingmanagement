import React from 'react';
import renderer from 'react-test-renderer';
declare module 'react-test-renderer';

import HomeView from '../src/screens/HomeView';

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<HomeView />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
