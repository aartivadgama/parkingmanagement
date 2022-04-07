import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import React from "react";
import EnterLotView from '../src/screens/EnterLotView'

Enzyme.configure({ adapter: new Adapter() });

describe("validateInput", () => {
  it("validateInput onPress", () => {

    const component = shallow(<EnterLotView />);
    const instance = component.instance(); 

    // Act
    const actual = instance.validateInput("");
    const actual1 = instance.validateInput("123asd"); 
    const actual2 = instance.validateInput("1"); 
    const actual3 = instance.validateInput("101"); 
    const actual4 = instance.validateInput("12"); 

    const ex = true;

    expect(actual4).toBe(ex);
    expect(actual1).toBe(ex);
    expect(actual2).toBe(ex);
    expect(actual3).toBe(ex);
    expect(actual).toBe(ex);

  });
});
