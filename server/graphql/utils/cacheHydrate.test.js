import cache from "../cache.js";
import knex from 'knex';
import mockKnex from 'mock-knex';
import { cacheHydrate } from "./cacheHydrate.js";

describe('cacheHydrate', () => {
  it('should hydrate the cache with data from the database', async () => {

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
      }]

    const knexInstance = knex(mockConfig);

    mockKnex.mock(knexInstance);

    const tracker = mockKnex.getTracker();
    tracker.install();

    tracker.on('query', (query) => {
      query.response(mockResponse);
    });

    const table = 'test_table';
    const operation = '*';

    const result = await cacheHydrate(table, operation, knexInstance);
    const cacheResults = cache.keys()


    expect(result).toEqual(mockResponse);
    expect(cacheResults).toEqual([mockResponse[0].id, mockResponse[1].id]);

    tracker.uninstall();
    mockKnex.unmock(knexInstance);
  });
});