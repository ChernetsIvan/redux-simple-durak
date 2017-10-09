import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import toJson from "enzyme-to-json";

import DeckUtils from "./../../utils/DeckUtils";
import NextButton from "./../../components/GameScreen/Player/Buttons/NextButton";

Enzyme.configure({ adapter: new Adapter() });

describe("NextButton", () => {
  const cards = DeckUtils.fillCards({ suit: "К" });
  const mockCallBack = jest.fn();

  test("Test click event", () => {
    const button = shallow(
      <NextButton endInd={1} cards={cards} onNextClick={mockCallBack} />
    );
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  test("test of rendering with > 10 cards", () => {
    const button = shallow(
      <NextButton endInd={1} cards={cards} onNextClick={mockCallBack} />
    );
    expect(toJson(button)).toMatchSnapshot();
  });

  test("test of rendering with < 10 cards", () => {
    const button = shallow(
      <NextButton
        endInd={0}
        cards={cards.slice(0, 5)}
        onNextClick={mockCallBack}
      />
    );
    expect(toJson(button)).toMatchSnapshot();
  });
});
