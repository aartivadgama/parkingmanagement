import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import HomeView from '../src/screens/HomeView'

Enzyme.configure({ adapter: new Adapter() });

describe("doClickLogin", () => {
  it("should call onPress", () => {

    const component = shallow(<HomeView />);
    const instance = component.instance(); 

    // Act
    const actual = instance.validateEmail("123asd");
    const actual1 = instance.validateEmail("123asd"); 

    const ex = true;

    expect(actual).toBe(ex);
    expect(actual1).toBe(ex);
  });
});
