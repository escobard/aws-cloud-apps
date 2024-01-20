export default describe("> getNotes query", () => {
  it(">> smoke test, api is alive and healthy", async () => {
    let {status, body} = await request(server).post('/graphql').send({
      "query": "query GetNotes {getNotes {note subject createdAt id removedAt updatedAt }}",
      "variables": {},
      "operationName": "GetNotes"
    });
    expect(status).toEqual(200)

    // validate that the response data has the expected properties & types
    return expect(body.data.getNotes).toEqual(expect.arrayContaining([
      expect.objectContaining({
        note: expect.any(String),
        subject: expect.any(String),
      })
    ]))

  });
});
