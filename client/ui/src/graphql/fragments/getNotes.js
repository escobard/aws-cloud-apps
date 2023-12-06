import gql from "graphql-tag";

export const getNotes = gql`
  query GetNotes {
    getNotes {
    id
      date
      note
      subject
    }
  }
`