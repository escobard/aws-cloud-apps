import mockKnex from 'mock-knex';
import createNote from './createNote';
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

mockKnex.mock(knexInstance);

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
    mockKnex.unmock(knexInstance);
  });
});