import cache from "../../cache.js";
import { knexConnector } from "../../utils/knexConnector.js";
import { cacheHydrate } from "../../utils/cacheHydrate.js";
import { dataFormatter } from "../../utils/index.js";

const getNoteByID = async (parent, noteId) => {
    try{
        let note;
        let cachedNote = cache.get(noteId);
        // checks if cache has note, if it does not, fetch from db
        /// if cache has no data, fetch data from database
        if (!cachedNote){
            let knex = knexConnector();
            let databaseNote = await knex('notes.notes').where({id: noteId})

            // TODO - move camelCase & unix date stamp conversion to utility - code has to be repeated in multiple places within resolvers
            // changes keys to camelCase for to process as JS
            databaseNote[0] = dataFormatter(databaseNote[0]);

            // populate cache with new note
            /// if cache does not have keys, assume cache is empty and add all existing notes + new notes
            if (cache.keys().length === 0){
                await cacheHydrate('notes.notes', '*')
                cache.set(databaseNote[0].id, databaseNote[0])
            }
            /// if cache has keys, assume cache is already usp to date and only add new note to cache
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
