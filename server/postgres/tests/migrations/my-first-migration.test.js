
describe("Validates that my-first-migration creates the specified data structures", () => {
  const subject = 'test subject';
  const note = 'test note'

  it("Validates that notes schema is present", async () => {
    const query = await pool.query(`SELECT id FROM notes.notes LIMIT 1`);

    expect(query.rows[0].id).toEqual(1);
  })
  it("Validates that notes table and records are available with the expected data and data types", async () => {
    const query = await pool.query(
      `SELECT id, subject, note, created_at, updated_at, removed_at FROM notes.notes WHERE subject=$1 LIMIT 1`,
      [subject]
    );

    // validate expected row data types
    expect(typeof query.rows[0].id).toBe("number")
    expect(typeof query.rows[0].subject).toBe("string")
    expect(typeof query.rows[0].note).toBe("string")

    // pg timestamps are returned as JS typeof objects
    expect(typeof query.rows[0].created_at).toBe("object")
    expect(typeof query.rows[0].updated_at).toBe("object")

    // null is returned as a type of object by pg, so deep comparison is done to validate null typeof value
    expect(query.rows[0].removed_at).toBe(null)

    // validate expected values for newly created note's subject and note
    expect(query.rows[0].subject).toEqual(subject)
    expect(query.rows[0].note).toEqual(note)
  })


})
