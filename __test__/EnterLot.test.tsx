import React from 'react';
import renderer from 'react-test-renderer';
declare module 'react-test-renderer';

import EnterLotView from '../src/screens/EnterLotView';

it('renders correctly', () => {
    const tree = renderer.create(<EnterLotView />).toJSON();
    expect(tree).toMatchSnapshot();
})