import { mapDispatchToProps } from "./../../containers/GameScreen/Player/Buttons/RemoveCardsButtonContainer";

describe("Map Dispatch To Props", () => {
  test("should call clickOnRemoveCards action-creator", () => {
    const mockFunction = jest.fn(() => "Mock function");
    const { onRemoveCardsClick } = mapDispatchToProps(mockFunction);
    onRemoveCardsClick();
    expect(mockFunction).toBeCalled();
  });
});
