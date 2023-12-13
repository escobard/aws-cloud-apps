import gql from "graphql-tag";

export const GET_NOTES_QUERY = gql`
  query GetNotes {
    getNotes {
    id
      date
      note
      subject
      updatedAt
    }
  }
`