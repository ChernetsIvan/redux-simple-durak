import { mapDispatchToProps } from "./../../containers/GameScreen/Player/Buttons/PlayerTakeButtonContainer";

describe("Map Dispatch To Props", () => {
  test("should call clickOnPlayerTake action-creator", () => {
    const mockFunction = jest.fn(() => "Mock function");
    const { onPlayerTakeClick } = mapDispatchToProps(mockFunction);
    onPlayerTakeClick();
    expect(mockFunction).toBeCalled();
  });
});
