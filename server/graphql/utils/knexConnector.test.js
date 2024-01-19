import knex from 'knex';
import mockKnex from 'mock-knex';
import { knexConnector } from './knexConnector';

describe('knexConnector', () => {
  it('should create a knex instance with correct configuration', () => {
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

    const mockEnv = {
      DB_HOST: 'localhost',
      DB_PORT: '5432',
      DB_NAME: 'test_db',
      DB_USER: 'test_user',
      DB_PASSWORD: 'test_password'
    };

    process.env = Object.assign(process.env, mockEnv);

    const knexInstance = knex(mockConfig);
    mockKnex.mock(knexInstance);

    const result = knexConnector();
    expect(result.client.config).toEqual(mockConfig);
    mockKnex.unmock(knexInstance);
  });
});