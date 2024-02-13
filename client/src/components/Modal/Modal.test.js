import Modal from "./index";

describe("Modal component", () => {
  const props = {
    title: "Test title",
    content: "Test content",
    showModal: true,
    closeModal: jest.fn()
  };
  it(">> snapshot is up to date", () => {
    const { container } = render(<Modal {...props} />);
    expect(container).toMatchSnapshot();
  });
  it(">> renders title and content", () => {
    const { getByText } = render(<Modal {...props} />);
    expect(getByText(props.title));
    expect(getByText(props.content));
  });
  it(">> triggers closeModal on click", () => {
    const { getByLabelText } = render(<Modal {...props} />);
    fireEvent.click(getByLabelText("Back"));
    expect(props.closeModal).toHaveBeenCalledTimes(1);
  });
  it(">> triggers closeModal on enter key down", () => {
    const { getByLabelText } = render(<Modal {...props} />);
    fireEvent.keyDown(getByLabelText("Back"), {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13
    });
    expect(props.closeModal).toHaveBeenCalledTimes(1);
  });
});
