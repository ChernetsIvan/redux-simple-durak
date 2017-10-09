import { mapDispatchToProps } from "./../../containers/StartScreen/StartScreenContainer";

describe("Map Dispatch To Props", () => {
  test("should call clickOnStartGameButton action-creator", () => {
    const mockFunction = jest.fn(() => "Mock function");
    const { onClickStartGame } = mapDispatchToProps(mockFunction);
    onClickStartGame();
    expect(mockFunction).toBeCalled();
  });

  test("should call clickOnRadioWhoMoveFirst action-creator", () => {
    const mockFunction = jest.fn(() => "Mock function");
    const { onChangeRadio } = mapDispatchToProps(mockFunction);
    onChangeRadio(true);
    expect(mockFunction).toBeCalled();
  });
});
