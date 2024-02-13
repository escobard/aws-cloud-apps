// example of a data-driven integration test with jest

const query = `
            mutation CreateNote($note: NoteInput) {
              createNote(note: $note) {
                note
                subject
              }
            }
            `;

const newNote = {
  note: "some product 1",
  subject: "some subject",
};

const newNote2 = {
  note: "some product 2",
  subject: "some subject 2",
}

const newNote3 = {
  note: "some product 3",
  subject: "some subject 3",
}

export const testData = [
  [{
    query,
    variables: {
      note: newNote
    }
  },newNote],
  [{
    query,
    variables: {
      note: newNote2
    }
  },newNote2],
  [{
    query,
    variables: {
      note: newNote3
    }
  },newNote3]
];

export default describe.each(testData)('With query=%p and response=%p', (query, response) => {
  it('query returns expected response and status 200', async () => {
    const { body, status } = await request(server).post('/graphql').send(query);
    expect(status).toEqual(200);
    expect(body.data.createNote).toEqual(
      expect.objectContaining({
        note: expect.any(String),
        subject: expect.any(String),
      })
    )
    return expect(body.data.createNote).toEqual(response);
  });
});

