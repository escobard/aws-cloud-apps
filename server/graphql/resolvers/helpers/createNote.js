import _ from "lodash";

import { knexConnector } from "../../utils/knexConnector.js";
import cache from "../../cache.js"

const createNote = async (parent, newNote) => {
    try{

        const note = { subject: newNote.subject, note: newNote.note }
        const knex = knexConnector();
        // ask knex to return all column results from insert, so data can be used to create a note in cache
        let createdNote = await knex('notes.notes').insert(note).returning('*');

        // TODO - big gotcha - if code preceding transaction to insert fails, a note is created in the database anyway even if server crashes!
        createdNote[0] = _.mapKeys(createdNote[0], (v, k) => _.camelCase(k))

        createdNote[0].createdAt = new Date(createdNote[0].createdAt).toLocaleString("en-US")
        createdNote[0].updatedAt = new Date(createdNote[0].updatedAt).toLocaleString("en-US")

        // TODO - if a note is created as the first operation on server start, cache will only contain the most recently created note!
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
