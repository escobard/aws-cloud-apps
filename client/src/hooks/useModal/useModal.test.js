import useModal from "./useModal";

describe("useModal hook", () => {
  it(">> opens modal", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.openModal();
    });

    expect(result.current.showModal).toEqual(true);
  });
  it(">> closes modal", () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.closeModal();
    });
    expect(result.current.showModal).toEqual(false);
  });
  // redundant, for test coverage only, ensures renderModal callback doesn't throw an error
  it(">> renders modal", () => {
    const { result } = renderHook(() => useModal());
    expect(
      result.current.renderModal({
        title: "",
        content: ""
      })
    ).toBeTruthy();
  });
});
