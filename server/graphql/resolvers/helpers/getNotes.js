import { knexConnector } from "../../utils/knexConnector.js"

import cache from "../../cache.js";

const getNotes = async () => {
    try{
        let knex = knexConnector();
        let notes;
        // checks to see if cache has data before calling DB
        /// if cache has no data, fetch data from database
        if (cache.keys().length === 0){
            notes = await knex('notes.notes').select('*');
            // populate cache with DB data after initial fetch
            notes.map(note => {
                cache.set(note.id, note)
            })
        }
        /// if cache has data, fetch data from cache instead of db
        else {
            notes = []
            cache.keys().map(id => {
                let note = cache.get(id)
                notes.push(note)
            });
        }
        return notes;
    }
    catch(err){
        return err;
    }
};

export default getNotes;
