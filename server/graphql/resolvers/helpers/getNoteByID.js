import cache from "../../cache.js";
import { cacheHydrate } from "../../utils/cacheHydrate.js";
import { dataFormatter } from "../../utils/index.js";

const getNoteByID = async (parent, noteId, knex) => {
    try{
        let note;
        let cachedNote = cache.get(noteId);
        // checks if cache has note, if it does not, fetch from db
        if (!cachedNote){
            let databaseNote = await knex('notes.notes').where({id: noteId})

            // TODO - write if statement to throw error when note not found in database or cache

            // changes keys to camelCase for to process as JS
            databaseNote[0] = dataFormatter(databaseNote[0]);

            // if cache does not have keys, assume cache is empty and add all existing notes + new notes
            if (cache.keys().length === 0){
                await cacheHydrate('notes.notes', '*', knex)
                cache.set(databaseNote[0].id, databaseNote[0])
            }
            /// if cache has keys, assume cache is already us to date and only update cache with new note
            else {
                cache.set(databaseNote[0].id, databaseNote[0])
            }
            note = databaseNote[0]
        }
        /// if cache has data, fetch data from cache instead of db
        else {
            note = cachedNote
        }
        return note;
    } catch(err){
        return err;
    }
};

export default getNoteByID;
