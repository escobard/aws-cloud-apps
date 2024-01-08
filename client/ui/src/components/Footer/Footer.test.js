/*
import { footer } from "constants/catalog";
import { NotesProvider } from "providers";

import Footer from "./index";

describe("Footer", () => {
  let props;


  const note = {
    title: "Note title",
    note: "Note description"
  };
  const getNotesBody = { data: [note, note, note] };

  afterAll(() => {
    cleanup();
  });

  it(">> snapshot is up to date", () => {
    const { container } = render(
        <Footer {...props}/>
    );
    expect(container).toMatchSnapshot();
  });

  it(">> should display no notes when count is 0", () => {
    const { getByText } = render(
        <Footer />
    );
    expect(getByText(footer.noNotes));
  });

  // TODO - rework test to follow approach outlined - https://react-testing-examples.netlify.app/
  /// component needs some state to work, will not render without state
  it(">> should display completed notes and count if count is not 0", async () => {
    mockApi.get.mockResolvedValue(getNotesBody);
    const { getByText } = render(
      <NotesProvider>
          <Footer />
      </NotesProvider>
    );
    await waitForElement(() => getByText(footer.withNotes));
    // legacy syntax
    /!*    await waitForDomChange();
    expect(getByText(footer.withNotes));*!/
  });
});
*/
