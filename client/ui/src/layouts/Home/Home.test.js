import { NotesProvider } from "@/providers";

import Home from "./index";

describe(">> render()", () => {

  it(">> snapshot with data is up to date", async () => {
    const { container } = render(
      <NotesProvider>
          <Home />
      </NotesProvider>
    );
    await waitForDomChange(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
