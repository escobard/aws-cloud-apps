import cache from "../../cache.js";
import { knexConnector } from "../../utils/knexConnector.js";
import _ from "lodash";

const getNoteByID = async (parent, noteId) => {
    try{
        let note;
        let cachedNote = cache.get(noteId);
        // checks if cache has note, if it does not, fetch from db
        /// if cache has no data, fetch data from database
        if (!cachedNote){
            let knex = knexConnector();
            let databaseNote = await knex('notes.notes').where({id: noteId})

            // changes keys to camelCase for to process as JS
            databaseNote[0] = _.mapKeys(databaseNote[0], (v, k) => _.camelCase(k))

            // sets unix timestamp dates from postgres to js readable dates
            databaseNote[0].createdAt = new Date(databaseNote[0].createdAt).toLocaleString("en-US")
            databaseNote[0].updatedAt = new Date(databaseNote[0].updatedAt).toLocaleString("en-US")

            // populate cache with new note
            /// if cache does not have keys, assume cache is empty and add all existing notes + new notes
            if (cache.keys().length === 0){
                let response = await knex('notes.notes').select('*');

                // populate cache with DB data after initial fetch
                response.map(n => {
                    // changes keys to camelCase for to process as JS
                    let noteToCamelcase = _.mapKeys(n, (v, k) => _.camelCase(k))

                    noteToCamelcase.createdAt = new Date(noteToCamelcase.createdAt).toLocaleString("en-US")
                    noteToCamelcase.updatedAt = new Date(noteToCamelcase.updatedAt).toLocaleString("en-US")

                    cache.set(noteToCamelcase.id, noteToCamelcase)
                })
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
