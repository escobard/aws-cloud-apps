import createNote from './createNote';

describe('> createNote', () => {
  it('>> should create a note and return it', async () => {

    const newNote = {
      subject: "New Subject",
      note: "This is a new note"
    };

    const mockResponse = [
      {
        "id": '3',
        "date": "2022-01-01T00:00:00.000Z",
        "note": newNote.note,
        "subject": newNote.subject
      }
    ];

    const tracker = mockKnex.getTracker();
    tracker.install();
    tracker.on('query', (query, step) => {
      query.response(mockResponse);
    });

    const result = await createNote({}, newNote, knexInstance);
    expect(result).toEqual(mockResponse[0]);
    expect(cache.get(mockResponse[0].id)).toEqual(mockResponse[0]);

    tracker.uninstall();
  });
});