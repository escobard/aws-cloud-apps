import { testData } from './testData.js';

// example of a data-driven integration test
export default describe.each(testData)('With query=%p and response=%p', (query, response) => {
  it('query returns expected response and status 200', async () => {
    const { body, status } = await request(server).post('/graphql').send(query);
    expect(status).toEqual(200);
    expect(body.data.createNote).toEqual(
      expect.objectContaining({
        note: expect.any(String),
        subject: expect.any(String),
      })
    )
    return expect(body.data.createNote).toEqual(response);
  });
});

