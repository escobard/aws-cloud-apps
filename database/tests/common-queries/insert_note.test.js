it("Validates that a new notes records can be inserted", async () => {

  const subject = 'unit test created note subject';
  const note = 'unit test created note'

  await pool.query(
    "INSERT INTO notes.notes(subject, note) VALUES($1, $2)",
    [subject, note]);

  const query = await pool.query(
    `SELECT id, subject, note, created_at, updated_at, removed_at FROM notes.notes WHERE subject=$1 LIMIT 1`,
    [subject]
  );

  // skipping deep validation, which are covered in migration tests
  expect(query.rows.length).toEqual(1)

  // deletes test-created records to avoid cluttering database with test data
  await pool.query(`DELETE FROM notes.notes WHERE subject=$1`, [subject]);
})