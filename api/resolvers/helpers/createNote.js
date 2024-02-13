import cache from "../../cache.js"

import { dataFormatter } from "../../utils/index.js";
import { cacheHydrate } from "../../utils/cacheHydrate.js";

const createNote = async (parent, newNote, knex) => {
    try{

        const note = { subject: newNote.subject, note: newNote.note }
        // ask knex to return all column results from insert, so data can be used to create a note in cache
        let createdNote = await knex('notes.notes').insert(note).returning('*');
        createdNote[0] = dataFormatter(createdNote[0])


        // TODO - move the checking of cache keys to higher level file, avoid duplicating the same code in each resolver
        if (cache.keys().length === 0){
            await cacheHydrate('notes.notes', '*', knex)
        }
        /// fix after creating formatData util
        // creates a note in cache after inserting data to db
        cache.set(createdNote[0].id, createdNote[0]);
        return createdNote[0];
    }
    catch(err){
        return 'createNote error:' + err;
    }
};

export default createNote;
