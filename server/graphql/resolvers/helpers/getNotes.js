import { cacheHydrate } from "../../utils/cacheHydrate.js";

const getNotes = async (parent, knex) => {
    try{
        let notes;
        // checks to see if cache has data before calling DB
        /// if cache has no data, fetch data from database
        if (cache.keys().length === 0){
            notes = await cacheHydrate('notes.notes', '*', knex)
        }
        /// if cache has data, fetch data from cache instead of db
        else {
            notes = []
            cache.keys().map(id => {
                let note = cache.get(id)
                notes.push(note)
            });
        }
        // reverse order to return latest notes first

        return notes.reverse();
    }
    catch(err){
        return 'getNotes error:' + err;
    }
};

export default getNotes;
