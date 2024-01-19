import getNotes from "./helpers/getNotes.js"
import createNote from "./helpers/createNote.js";
import getNoteByID from "./helpers/getNoteByID.js";
import { knexConnector } from "../utils/index.js";
import cache from "../cache.js";

let knex = knexConnector();

const resolver = {
    Query: {
        getNotes(parent){
            return getNotes(parent, knex);
        },
        getNoteByID(parent, { id }){
            return getNoteByID(parent, id, knex)
        }
    },
    Mutation: {
        createNote(parent, { note }){
            return createNote(parent, note, knex)
        }
    }
};

export default resolver
