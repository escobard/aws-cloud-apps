import { knexConnector } from "../../utils/knexConnector.js"
import _ from 'lodash'

import cache from "../../cache.js";

const getNotes = async () => {
    try{
        let knex = knexConnector();
        let notes;
        // checks to see if cache has data before calling DB
        /// if cache has no data, fetch data from database
        if (cache.keys().length === 0){
            let response = await knex('notes.notes').select('*');
            notes = []
            response.map(note => {
                // changes keys to camelCase for to process as JS
                let noteToCamelcase = _.mapKeys(note, (v, k) => _.camelCase(k))

                // sets unix timestamp dates from postgres to js readable dates
                noteToCamelcase.createdAt = new Date(noteToCamelcase.createdAt).toLocaleString("en-US")
                noteToCamelcase.updatedAt = new Date(noteToCamelcase.updatedAt).toLocaleString("en-US")
                // commenting out until there is logic to remove notes
                // noteToCamelcase.removedAt = new Date(noteToCamelcase.removedAt).toLocaleString("en-US")
                notes.push(noteToCamelcase)
                cache.set(note.id, noteToCamelcase)
            })
        }
        /// if cache has data, fetch data from cache instead of db
        else {
            notes = []
            cache.keys().map(id => {
                let note = cache.get(id)
                console.log('NOTE', note)
                notes.push(note)
            });
        }
        // reverse order to return latest notes first

        return notes.reverse();
    }
    catch(err){
        return err;
    }
};

export default getNotes;
