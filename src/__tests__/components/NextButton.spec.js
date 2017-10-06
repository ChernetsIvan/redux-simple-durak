import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import DeckUtils from "./../../utils/DeckUtils";
import NextButton from "./../../components/GameScreen/Player/Buttons/NextButton";

Enzyme.configure({ adapter: new Adapter() });

describe("NextButton test click", () => {
  test("Test click event", () => {
    const cards = DeckUtils.fillCards({ suit: "К" });
    const mockCallBack = jest.fn();
    const button = shallow(
      <NextButton endInd={1} cards={cards} onNextClick={mockCallBack} />
    );
    button.find('button').simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
