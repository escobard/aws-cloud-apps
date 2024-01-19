import getNotes from './getNotes';

const mockResponse = [
  {
    "id": '1',
    "date": "2020-01-01T00:00:00.000Z",
    "note": "This is a note",
    "subject": "This is a subject"
  },
  {
    "id": '2',
    "date": "2020-01-01T00:00:00.000Z",
    "note": "This is a note",
    "subject": "This is a subject",
  }
];

describe('> getNotes', () => {
  it('>> should return notes found from the database if no notes are found from the cache', async () => {
    tracker.install();
    tracker.on('query', (query) => {
      query.response(mockResponse);
    });

    const result = await getNotes({}, knexInstance);
    expect(result).toEqual(mockResponse.reverse());
    expect(cache.keys().length).toEqual(mockResponse.length);

    tracker.uninstall();
    // prevent weird behavior in followup tests due to global variable
    mockResponse.reverse()
  });

  it('>> should return notes found from the cache', async () => {
    mockResponse.map((note) => {
      cache.set(note.id, note);
    })

    const result = await getNotes({}, {});
    expect(result).toEqual(mockResponse.reverse());
    console.log(mockResponse)
    expect(cache.keys().length).toEqual(mockResponse.length);
    mockResponse.reverse()
  });

  it('>> should return an error if there are any failures in the try/catch block', async () => {
    tracker.install();
    tracker.on('query', (query) => {
      query.reject('Database error');
    });

    const result = await getNotes({}, knexInstance);
    expect(result).toContain('getNotes error:');

    tracker.uninstall();
  });
});