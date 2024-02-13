it("Validates that notes records can be fetched with a select", async () => {
  const query = await pool.query(`
        SELECT id, subject, note, created_at, updated_at, removed_at FROM notes.notes LIMIT 1
  `);

  // skipping deep validation, which are covered in migration tests
  expect(query.rows.length).toEqual(1)
})