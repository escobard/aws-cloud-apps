import gql from "graphql-tag";

export const ADD_NOTE_MUTATION = gql`
  mutation CreateNote($note: NoteInput) {
    createNote(note: $note) {
      id
      note
      subject
    }
  }
`