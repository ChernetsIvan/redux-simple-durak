import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import toJson from 'enzyme-to-json';

import App from "./../../components/App";

Enzyme.configure({ adapter: new Adapter() });

describe("App shallow render test", () => {
  test("App recieve showStartScreen=false", () => {
    const component = shallow(<App showStartScreen={false} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  test("App recieve showStartScreen=true", () => {
    const component = shallow(<App showStartScreen />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
