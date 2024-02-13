import createNote from './createNote';

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

describe('> createNote', () => {
  it('>> should create a note and return it', async () => {
    tracker.install();
    tracker.on('query', (query, step) => {
      query.response(mockResponse);
    });

    const result = await createNote({}, newNote, knexInstance);
    expect(result).toEqual(mockResponse[0]);
    expect(cache.get(mockResponse[0].id)).toEqual(mockResponse[0]);

    tracker.uninstall();
  });

  it('>> should skip hydrating cache if cache has keys', async () => {
    cache.set(1, mockResponse[0])
    tracker.install();
    tracker.on('query', (query, step) => {
      query.response(mockResponse);
    });

    const result = await createNote({}, newNote, knexInstance);
    expect(result).toEqual(mockResponse[0]);
    expect(cache.get(mockResponse[0].id)).toEqual(mockResponse[0]);
    expect(cache.keys().length).toEqual(2);

    tracker.uninstall();
  });

  it('>> should return an error if there are any failures in the try/catch block', async () => {
    tracker.install();
    tracker.on('query', (query) => {
      query.reject('Database error');
    });

    const result = await createNote({}, newNote, knexInstance);
    expect(result).toContain('createNote error:');

    tracker.uninstall();
  });

});