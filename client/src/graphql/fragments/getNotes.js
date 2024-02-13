import gql from "graphql-tag";

export const GET_NOTES_QUERY = gql`
  query GetNotes {
    getNotes {
      id
      note
      subject
      updatedAt
    }
  }
`