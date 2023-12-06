const typeDefs = `
  type Note {
    id: ID!
    subject: String!
    note: String!
    date: String!
  }
  
  input NoteInput {
    subject: String!
    note: String!
  }
  
  type Query {
    getNoteByID(id: ID!): Note
    getNotes: [Note]
  }
  
  type Mutation {
    createNote(note: NoteInput): Note
  }
`;

export default typeDefs;
