const typeDefs = `
  type Note {
    id: ID!
    subject: String!
    note: String!
    date: String!
  }
  
  input NoteInput {
    id: ID!
    subject: String!
    note: String!
    date: String!
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
