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
// //Thu Apr 07 2022 18:55:22
//     const actual3 = instance.calcPayment("Thu Apr 07 2022 18:00:00", "Thu Apr 07 2022 19:00:00");
//     const actual4 = instance.calcPayment("Thu Apr 07 2022 18:00:00", "Thu Apr 07 2022 21:00:00");
//     console.log("actual3", actual3);
//     console.log("actual4", actual4);

    const ex = true;

    expect(actual).toBe(ex);
    expect(actual1).toBe(ex);
  });
});
