import { useAlert } from "./useAlert";

describe("useAlert hook", () => {
  it(">> sets alert", () => {
    const message = {
      title: "Note added!",
      message: status,
      status: "green"
    };
    const { result } = renderHook(() => useAlert());

    act(() => {
      result.current.setAlert(message);
    });

    waitFor(() => {
      expect(result.current.alert).toEqual(message);
    })

  });
});
