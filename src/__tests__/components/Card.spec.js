import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import Card from "./../../components/GameScreen/Card/Card";

describe("Card snapshot testing", () => {
  test("Card with suit К", () => {
    const emptyFunc = () => {};
    const component = renderer.create(
      <Card
        id={1}
        rank={{ text: "6", cardValue: 1 }}
        suit={{ suit: "К" }}
        onCardClick={emptyFunc}
        bootStrapColClass={"col-1"}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Card with suit Ч", () => {
    const emptyFunc = () => {};
    const component = renderer.create(
      <Card
        id={2}
        rank={{ text: "6", cardValue: 1 }}
        suit={{ suit: "Ч" }}
        onCardClick={emptyFunc}
        bootStrapColClass={"col-1"}
      />
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
