import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import toJson from "enzyme-to-json";

import DeckUtils from "./../../utils/DeckUtils";
import Player from "./../../components/GameScreen/Player/Player";

Enzyme.configure({ adapter: new Adapter() });

describe("Player shallow render test", () => {
  const cards = DeckUtils.fillCards({ suit: "Б" });
  const emptyFunc = () => {};

  test("Player recieve > 10 cards (36)", () => {
    const component = shallow(<Player cards={cards} onCardClick={emptyFunc} />);
    expect(toJson(component)).toMatchSnapshot();
  });

  test("Player recieve < 10 cards (5)", () => {
    const component = shallow(<Player cards={cards.slice(0,5)} onCardClick={emptyFunc} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
