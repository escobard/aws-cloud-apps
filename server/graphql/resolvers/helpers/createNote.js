import { knexConnector } from "../../utils/knexConnector.js";

import cache from "../../cache.js"
const createNote = async (parent, newNote) => {
    try{

        // TODO - improve modularity by movind this code to a util for generic date creation with the specified format
        const date = new Date().toLocaleDateString("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
            timeZone: "Canada/Mountain",
        });

        const note = { subject: newNote.subject, note: newNote.note, date }
        const knex = knexConnector();
        // ask knex to return all column results from insert, so data can be used to create a note in cache
        const createdNote = await knex('notes.notes').insert(note).returning('*');
        // creates a note in cache after inserting data to db
        cache.set(createdNote[0].id, createdNote[0]);
        return createdNote[0];
    }
    catch(err){
        return err;
    }
};

export default createNote;
