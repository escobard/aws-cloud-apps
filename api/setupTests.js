import knex from 'knex';
import mockKnex from 'mock-knex';
import request from 'supertest';
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
  global.tracker = mockKnex.getTracker();
  global.knexInstance = knexInstance;
  global.cache = cache;
  global.knex = knex;
  global.request = request;
})

// ensures each test case is run in isolation with a clean cache and database
beforeEach(() => {
  mockKnex.mock(knexInstance);
})

afterEach(() => {
  mockKnex.unmock(knexInstance);
  cache.flushAll();
})