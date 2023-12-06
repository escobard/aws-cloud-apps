# getNotes query

Use this query to retrieve all available notes from the database / embedded API cache:

```
query GetNotes {
  getNotes {
  id
    date
    note
    subject
  }
}
```

## Expected response

This query should return an array{} of notes:

```
{
  "data": {
    "getNotes": [
      {
        "id": 1,
        "date": "2020-01-01T00:00:00.000Z",
        "note": "This is a note",
        "subject": "This is a subject"
      },
      {
        "id": 2,
        "date": "2020-01-01T00:00:00.000Z",
        "note": "This is a note",
        "subject": "This is a subject"
      },
      {
        "id": 3,
        "date": "2020-01-01T00:00:00.000Z",
        "note": "This is a note",
        "subject": "This is a subject"
      }
    ]
  }
}
```