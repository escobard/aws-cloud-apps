import { footer } from "@/constants";
import { NotesProvider } from "@/providers";

import {GET_NOTES_QUERY} from "@/graphql/fragments/getNotes";

import Footer from "./Footer";

describe("Footer", () => {

  let mocks;

  beforeEach(() => {
    mocks = [
      {
        request: {
          query: GET_NOTES_QUERY
        },
        result: {
          data: {
            getNotes: []
          }
        }
      }
    ]
  })

  afterAll(() => {
    cleanup();
  });

  it(">> snapshot is up to date", () => {
    const { container } = render(
        <Footer />
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
    mocks[0].result.data.getNotes.push({
      "id": "1",
      "createdAt": "1/13/2024, 1:10:48 AM",
      "updatedAt": "1/13/2024, 1:10:48 AM",
      "note": "test note",
      "subject": "test subject"
    });

    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <NotesProvider>
          <Footer />
        </NotesProvider>
      </MockedProvider>
    );
    await waitFor(() => expect(getByText(footer.withNotes)))

  });
});

