import getNotes from "./helpers/getNotes.js"
import createNote from "./helpers/createNote.js";

const resolver = {
    Query: {
        getNotes(parent){
            return getNotes(parent);
        }
    },
    Mutation: {
        createNote(parent, { note }){
            console.log(note)
            return createNote(parent, note)
        }
    }
};

export default resolver
