import cache from "../../cache.js";
import { knexConnector } from "../../utils/knexConnector.js";

const getNoteByID = async (parent, noteId) => {
    try{
        let note;
        let cachedNote = cache.get(noteId);
        // checks if cache has note, if it does not, fetch from db
        /// if cache has no data, fetch data from database
        if (!cachedNote){
            let knex = knexConnector();
            let databaseNote = await knex('notes.notes').where({id: noteId})

            // populate cache with new note
            /// if cache does not have keys, assume cache is empty and add all existing notes + new notes
            if (cache.keys().length === 0){
                let notes = await knex('notes.notes').select('*');
                // populate cache with DB data after initial fetch
                notes.map(note => {
                    cache.set(note.id, note)
                })
                cache.set(databaseNote[0].id, databaseNote[0])
            }
            /// if cache has keys, assume cache is already up to date and only add new note to cache
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
