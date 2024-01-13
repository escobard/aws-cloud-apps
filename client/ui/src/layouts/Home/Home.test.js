import { NotesProvider } from "@/providers";

import Home from "./Home";
import { GET_NOTES_QUERY } from "@/graphql/fragments/getNotes";
import { notes as noteCatalog } from "../../constants";

describe(">> render()", () => {
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

  it(">> generates snapshot", async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <NotesProvider>
            <Home />
        </NotesProvider>
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it(">> Shows loading text when notes are loading", async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <NotesProvider>
          <Home />
        </NotesProvider>
      </MockedProvider>
    );
    expect(getByText(noteCatalog.loading.subject));
  });

  it(">> Shows notes when notes are returned from API", async () => {
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
          <Home />
        </NotesProvider>
      </MockedProvider>
    );
    await waitFor( () => expect(getByText('test note')))
  });

  it(">> Shows no notes when no notes are returned from API", async () => {
    mocks[0].result.data.getNotes.push([]);

    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <NotesProvider>
          <Home />
        </NotesProvider>
      </MockedProvider>
    );

    await waitFor(() => expect(getByText(noteCatalog.noNotes.subject)))
  });


  it(">> Shows API error with malformed response", async () => {
    mocks[0].result.data.getNotes = ('some error');

    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <NotesProvider>
          <Home />
        </NotesProvider>
      </MockedProvider>
    );

    await waitFor(() => expect(getByText(noteCatalog.apiError.subject)))
  });

});
