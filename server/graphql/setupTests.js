import knex from 'knex';
import mockKnex from 'mock-knex';
import cache from "./cache.js";

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

beforeAll(() => {
  global.mockKnex = mockKnex;
  global.knexInstance = knexInstance;
  global.cache = cache;
  global.knex = knex;
})

// ensures each test case is run in isolation with a clean cache and database
beforeEach(() => {
  mockKnex.mock(knexInstance);
})

afterEach(() => {
  mockKnex.unmock(knexInstance);
  cache.flushAll();
})