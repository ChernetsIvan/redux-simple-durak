import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import DeckUtils from "./../../utils/DeckUtils";
import PrevButton from "./../../components/GameScreen/Player/Buttons/PrevButton";

Enzyme.configure({ adapter: new Adapter() });

describe("Test click on Card", () => {
  test("Test click event", () => {
    const cards = DeckUtils.fillCards({ suit: "К" });
    const mockCallBack = jest.fn();
    const button = shallow(
      <PrevButton startInd={1} cards={cards} onPrevClick={mockCallBack} />
    );
    button.find('button').simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
