import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import toJson from "enzyme-to-json";

import GameScreen from "./../../components/GameScreen/GameScreen";
import DeckUtils from "./../../utils/DeckUtils";

Enzyme.configure({ adapter: new Adapter() });

describe("GameScreen shallow render test", () => {
  test("test", () => {
    const emptyFunc = () => {};
    const cards = DeckUtils.fillCards({ suit: "Б" });

    const component = shallow(
      <GameScreen
        onBeginGameClick={emptyFunc}
        aiField={cards.slice(0, 5)}
        playerField={cards.slice(0, 5)}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
