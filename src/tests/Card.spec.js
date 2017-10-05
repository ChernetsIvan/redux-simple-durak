import React from "react";
import renderer from "react-test-renderer";
import Card from "./../components/GameScreen/Card/Card";

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
