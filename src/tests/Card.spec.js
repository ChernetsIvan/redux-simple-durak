import React from "react";
import renderer from "react-test-renderer";
import Card from "./../components/GameScreen/Card/Card";

test("Card snapshot testing", () => {
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
