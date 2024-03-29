// reminder that imports are CASE SENSITIVE for mac / linux
const pool = require("./utils/Pool");

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

beforeAll(async () => {
  global.pool = pool

  return pool.connect({
    host,
    port,
    database,
    user,
    password
  })
});

afterAll(async () => {
  return pool.close();
});