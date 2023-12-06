# addNote mutation

Use this query to retrieve add a Note to the database / API embedded cache:

## Mutation

```
mutation CreateNote($note: NoteInput) {
  createNote(note: $note) {
    id
    date
    note
    subject
  }
}
```

## Variables

```
{
  "note": {
    "note": "this is a test note",
    "subject": "test"
  }
}
```

## Expected response

This query should return an object with the new note:

```
{
  "data": {
    "createNote": {
      "id": 1,
      "date": "test",
      "note": "this is a test note",
      "subject": "test"
    }
  }
}
```