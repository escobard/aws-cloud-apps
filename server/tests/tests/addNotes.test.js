
// Warning - deep assertions on this test will fail unless addNotes.test.js is run first
export default describe("> addNotes mutation", () => {
  it(">> Creates notes and confirms expected types & values", async () => {

    let query = {
      query: "mutation CreateNote($note: NoteInput) {createNote(note: $note) {id note subject createdAt}}",
      variables: {
        note: {
          note: "this is a test note",
          subject: "test"
        }
      },
      operationName: "CreateNote"
    }

    let {status, body} = await request(server).post('/graphql').send(query);
    expect(status).toEqual(200)

    // validate that the response data has the expected properties & types
    return expect(body.data.createNote).toEqual(
      expect.objectContaining({
        note: expect.any(String),
        subject: expect.any(String),
      })
    )

  });
});
