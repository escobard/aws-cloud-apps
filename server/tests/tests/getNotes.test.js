// example of a non-data driven integration test
export default describe("> getNotes query", () => {
  it(">> Fetches notes and confirms expected types & values", async () => {

    let query = `
      query GetNotes {
        getNotes {
          note
          subject
          createdAt
          id
          removedAt
          updatedAt
        }
      }
    `

    let {status, body} = await request(server).post('/graphql').send({query});
    expect(status).toEqual(200)

    // validate that the response data has the expected properties & types
    expect(body.data.getNotes).toEqual(expect.arrayContaining([
      expect.objectContaining({
        note: expect.any(String),
        subject: expect.any(String),
      })
    ]))

  });
});