import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import HomeView from '../src/screens/HomeView'

Enzyme.configure({ adapter: new Adapter() });

describe("validateInput", () => {
  it("validateInput onPress", () => {

    const component = shallow(<HomeView />);
    const instance = component.instance(); 

    // Act
    const actual = instance.validateInput("");
    const actual1 = instance.validateInput("123asd"); 

    const ex = true;

    expect(actual).toBe(ex);
    expect(actual1).toBe(ex);
  });
});
