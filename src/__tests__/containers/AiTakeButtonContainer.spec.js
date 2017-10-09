import { mapDispatchToProps } from "./../../containers/GameScreen/Player/Buttons/AiTakeButtonContainer";

describe("Map Dispatch To Props", () => {
  test("should call clickOnAiTake action-creator", () => {
    const mockFunction = jest.fn(() => "Mock function");
    const { onAiTakeClick } = mapDispatchToProps(mockFunction);
    onAiTakeClick();
    expect(mockFunction).toBeCalled();
  });
});
