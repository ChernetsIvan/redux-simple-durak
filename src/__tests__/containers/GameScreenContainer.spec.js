
import {
  mapDispatchToProps
} from "./../../containers/GameScreen/GameScreenContainer";

describe("Map Dispatch To Props", () => {
  test("should call onBeginGameClick action", () => {
    const mockFunction = jest.fn(() => 'Mock function');
    const { onBeginGameClick } = mapDispatchToProps(mockFunction);
    onBeginGameClick();
    expect(mockFunction).toBeCalled();
  });
});
