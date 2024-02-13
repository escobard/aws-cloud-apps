import getNoteByID from './getNoteByID';

describe('> getNoteByID', () => {
  it('>> should return the note with the given ID from the cache if it exists', async () => {
    const noteId = '1';
    const mockResponse = {
      "id": noteId,
      "date": "2020-01-01T00:00:00.000Z",
      "note": "This is a note",
      "subject": "This is a subject"
    };

    cache.set(noteId, mockResponse);

    const result = await getNoteByID({}, noteId, {});
    expect(result).toEqual(mockResponse);
  });

  it('>> should return the note with the given ID from the database if it does not exist in the cache', async () => {
    const noteId = '2';
    const mockResponse = {
      "id": noteId,
      "date": "2020-01-01T00:00:00.000Z",
      "note": "This is a note",
      "subject": "This is a subject"
    };

    tracker.install();
    tracker.on('query', (query) => {
      query.response([mockResponse]);
    });

    const result = await getNoteByID({}, noteId, knexInstance);
    expect(result).toEqual(mockResponse);

    tracker.uninstall();
  });

  // TODO - write test to hydrate the cache if it is empty
  it('>> should set found note on cache if it exists in database but not in cache', async () => {
    const noteId = '3';
    const mockResponse = {
      "id": noteId,
      "date": "2020-01-01T00:00:00.000Z",
      "note": "This is a note",
      "subject": "This is a subject"
    };

    cache.set(1, mockResponse);


    tracker.install();
    tracker.on('query', (query) => {
      query.response([mockResponse]);
    });

    const result = await getNoteByID({}, noteId, knexInstance);
    expect(result).toEqual(mockResponse);
    expect(cache.get(noteId)).toEqual(mockResponse);
    tracker.uninstall();
  });

  it('>> should return an error if no note is found in cache or database', async () => {
    tracker.install();
    tracker.on('query', (query) => {
      query.response([]);
    });

    const result = await getNoteByID({}, 1, knexInstance);
    expect(result).toContain("getNoteByID error:Error: Note not found");

    tracker.uninstall();
  });

  it('>> should return an error if there are any failures in the try/catch block', async () => {
    tracker.install();
    tracker.on('query', (query) => {
      query.reject('Database error');
    });

    const result = await getNoteByID({}, 1, knexInstance);
    expect(result).toContain('getNoteByID error:');

    tracker.uninstall();
  });
});


