import request from 'supertest';
import { expressServer } from './index.js';

describe('GraphQL Server', () => {
  it('should return Healthy! on GET /', async () => {
    const response = await request(expressServer).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Healthy!');
  });

  it('should return 200 on POST /graphql with a valid query', async () => {
    const response = await request(expressServer)
      .post('/graphql')
      .send({ query: '{ __typename }' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('data');
  });

  it('should return error on POST /graphql with an invalid query', async () => {
    const response = await request(expressServer)
      .post('/graphql')
      .send({ query: '{ invalidQuery }' });
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('errors');
  });
  afterAll(async () => {
    await expressServer.close();
  });
});