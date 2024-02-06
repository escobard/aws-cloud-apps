it("Validates that the database is alive and accepting connections", async () => {
  const query = await pool.query(`
        SELECT 1+1
    `);

  expect(query.rows[0]).toEqual({"?column?": 2});
})

