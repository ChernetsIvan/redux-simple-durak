import { mapDispatchToProps } from "./../../containers/GameScreen/StatusContainer";

describe("Map Dispatch To Props", () => {
  test("should call gameOver action-creator", () => {
    const mockFunction = jest.fn(() => "Mock function");
    const { onGameOver } = mapDispatchToProps(mockFunction);
    onGameOver();
    expect(mockFunction).toBeCalled();
  });
});
