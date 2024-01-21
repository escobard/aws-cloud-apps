import supertest from "supertest";

beforeAll(async () => {
  global.request = supertest;

});

beforeEach(() => {
  global.server = process.env.API || 'http://localhost:4000';
});

afterEach(() => {
  global.server = null;
});
