import supertest from "supertest";

beforeAll(async () => {
  global.request = supertest;

});

beforeEach(() => {
  global.server = `http://localhost:4000`;
});

afterEach(() => {
  global.server = null;
});
