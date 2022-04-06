import React from 'react';
import renderer from 'react-test-renderer';
declare module 'react-test-renderer';

import HomeView from '../src/screens/HomeView';

it('renders correctly', () => {
    const tree = renderer.create(<HomeView />).toJSON();
    expect(tree).toMatchSnapshot();
})