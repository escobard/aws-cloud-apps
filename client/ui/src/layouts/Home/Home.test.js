import { NotesProvider } from "@/providers";

import Home from "./index";
import {GET_NOTES_QUERY} from "@/graphql/fragments/getNotes";

describe(">> render()", () => {

  const mocks = [
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

  it(">> snapshot with data is up to date", async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <NotesProvider>
            <Home />
        </NotesProvider>
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
