import mockKnex from 'mock-knex';
import getNoteByID from './getNoteByID';
import knex from "knex";
import cache from "../../cache.js";

const mockConfig = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: '5432',
    user: 'test_user',
    password: 'test_password',
    database: 'test_db'
  }
};

const knexInstance = knex(mockConfig);

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

    cache.del(noteId);

    mockKnex.mock(knexInstance);

    const tracker = mockKnex.getTracker();
    tracker.install();
    tracker.on('query', (query) => {
      query.response([mockResponse]);
    });

    const result = await getNoteByID({}, noteId, knexInstance);
    expect(result).toEqual(mockResponse);

    tracker.uninstall();
    mockKnex.unmock(knexInstance);
  });

  // TODO - write test to hydrate the cache if it is empty



  // TODO - write test to throw error if note is not found in cache or database
});


