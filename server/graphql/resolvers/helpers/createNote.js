import cache from "../../cache.js"

import { knexConnector } from "../../utils/knexConnector.js";
import { dataFormatter } from "../../utils/index.js";
import { cacheHydrate } from "../../utils/cacheHydrate.js";

const createNote = async (parent, newNote) => {
    try{

        const note = { subject: newNote.subject, note: newNote.note }
        const knex = knexConnector();
        // ask knex to return all column results from insert, so data can be used to create a note in cache
        let createdNote = await knex('notes.notes').insert(note).returning('*');

        // TODO - big gotcha - if code preceding transaction to insert fails, a note is created in the database anyway even if server crashes!
        createdNote[0] = dataFormatter(createdNote[0])

        if (cache.keys().length === 0){
            await cacheHydrate('notes.notes', '*', knex)
        }
        /// fix after creating formatData util
        // creates a note in cache after inserting data to db
        cache.set(createdNote[0].id, createdNote[0]);
        return createdNote[0];
    }
    catch(err){
        return err;
    }
};

export default createNote;
