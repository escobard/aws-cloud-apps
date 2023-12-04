import getNotes from "./helpers/getNotes.js"
import createNote from "./helpers/createNote.js";
import getNoteByID from "./helpers/getNoteByID.js";

const resolver = {
    Query: {
        getNotes(parent){
            return getNotes(parent);
        },
        getNoteByID(parent, { id }){
            console.log('NOTE', id)
            return getNoteByID(parent, id)
        }
    },
    Mutation: {
        createNote(parent, { note }){
            return createNote(parent, note)
        }
    }
};

export default resolver
