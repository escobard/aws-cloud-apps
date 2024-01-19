import mockKnex from 'mock-knex';
import getNotes from './getNotes';
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
describe('> getNotes', () => {
  it('>> should return notes found from the database', async () => {
    // Define what the mock query should return
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

    // Create a tracker to track queries and provide responses
    const tracker = mockKnex.getTracker();
    tracker.install();
    tracker.on('query', (query) => {
      query.response(mockResponse);
    });

    const result = await getNotes({}, knexInstance);
    expect(result).toEqual(mockResponse.reverse());
    expect(cache.keys().length).toEqual(mockResponse.length);

    tracker.uninstall();
    mockKnex.unmock(knexInstance);
  });
});