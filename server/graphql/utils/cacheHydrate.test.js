import { cacheHydrate } from "./cacheHydrate.js";

describe('> cacheHydrate', () => {
  it('>> should hydrate the cache with data from the database', async () => {

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
  });
});