import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import DeckUtils from "./../../utils/DeckUtils";
import Player from "./../../components/GameScreen/Player/Player";

describe("Player snapshot testing", () => {
  const cards = DeckUtils.fillCards({ suit: "К" });
  const emptyFunc = () => {};

  test("with count of cards > 10", () => {
    const component = renderer.create(
      <Player cards={cards} onCardClick={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("with count of cards < 10", () => {
    const component = renderer.create(
      <Player cards={cards.slice(0,5)} onCardClick={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Card with suit Б", () => {
    const emptyFunc = () => {};
    const component = renderer.create(
      <Card
        id={2}
        rank={{ text: "6", cardValue: 1 }}
        suit={{ suit: "Б" }}
        onCardClick={emptyFunc}
        bootStrapColClass={"col-1"}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Card with suit П", () => {
    const emptyFunc = () => {};
    const component = renderer.create(
      <Card
        id={2}
        rank={{ text: "6", cardValue: 1 }}
        suit={{ suit: "П" }}
        onCardClick={emptyFunc}
        bootStrapColClass={"col-1"}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Card with not existing suit", () => {
    const emptyFunc = () => {};
    const component = renderer.create(
      <Card
        id={2}
        rank={{ text: "6", cardValue: 1 }}
        suit={{ suit: "Й" }}
        onCardClick={emptyFunc}
        bootStrapColClass={"col-1"}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

Enzyme.configure({ adapter: new Adapter() });

describe("Test click on Card", () => {
  test("Test click event", () => {
    const mockCallBack = jest.fn();
    const card = shallow(
      <Card
        id={2}
        rank={{ text: "6", cardValue: 1 }}
        suit={{ suit: "П" }}
        onCardClick={mockCallBack}
        bootStrapColClass={"col-1"}
      />
    );
    card.find('[className="col-1 card mb-1"]').simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
