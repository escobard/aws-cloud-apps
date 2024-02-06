const pool = require("../../utils/pool");

it("Validates that the database is alive and accepting connections", async () => {
  const response = await pool.query(`
        SELECT 1+1
    `);

  expect(response.rows[0]).toEqual({"?column?": 2});
})

