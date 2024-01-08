import Note from "./index";

const props = {
  id: "test",
  data: {
    subject: "Test subject",
    note: "Test note",
    updatedAt: "02/23/20, 11:46 PM"
  }
};

describe("Note", () => {
  afterAll(() => {
    cleanup();
  });

  it(">> snapshot is up to date", () => {
    const { container } = render(<Note {...props} />);
    expect(container).toMatchSnapshot();
  });

  it(">> should display notes data and circular icon", () => {
    const {
      data: { subject, note, updatedAt }
    } = props;
    const { getByText, container } = render(<Note {...props} />);
    expect(getByText(subject));
    expect(getByText(note));
    expect(getByText(updatedAt));
    expect(container.querySelector(".sticky.note"));
  });

  it(">> should hide date when no date is given", () => {
    props.data.updatedAt = undefined;
    const { container } = render(<Note {...props} />);
    expect(container.querySelector(".date")).toEqual(null);
  });

  it(">> should show different icon if icon is defined", () => {
    props.data.icon = {
      image: "some icon",
      label: "No Notes"
    };
    const { container } = render(<Note {...props} />);
    expect(container.querySelector(".sticky.note")).toEqual(null);
    expect(container.querySelector(".some.icon"));
  });
});
