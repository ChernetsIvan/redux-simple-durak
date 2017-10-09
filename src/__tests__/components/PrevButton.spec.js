import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import toJson from "enzyme-to-json";

import DeckUtils from "./../../utils/DeckUtils";
import PrevButton from "./../../components/GameScreen/Player/Buttons/PrevButton";

Enzyme.configure({ adapter: new Adapter() });

describe("PrevButton", () => {
  const cards = DeckUtils.fillCards({ suit: "К" });
  const mockCallBack = jest.fn();

  test("Test click event", () => {
    const button = shallow(
      <PrevButton startInd={1} cards={cards} onPrevClick={mockCallBack} />
    );
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  test("test of rendering with > 10 cards", () => {
    const button = shallow(
      <PrevButton startInd={1} cards={cards} onPrevClick={mockCallBack} />
    );
    expect(toJson(button)).toMatchSnapshot();
  });

  test("test of rendering with < 10 cards", () => {
    const button = shallow(
      <PrevButton
        startInd={0}
        cards={cards.slice(0, 5)}
        onPrevClick={mockCallBack}
      />
    );
    expect(toJson(button)).toMatchSnapshot();
  });
});
