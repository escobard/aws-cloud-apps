import { knexConnector } from "../../utils/knexConnector.js"
import _ from 'lodash'

import cache from "../../cache.js";
import {dataFormatter} from "../../utils/index.js";

const getNotes = async () => {
    try{
        let knex = knexConnector();
        let notes;

        // checks to see if cache has data before calling DB
        /// if cache has no data, fetch data from database
        // TODO - 
        if (cache.keys().length === 0){
            let response = await knex('notes.notes').select('*');
            notes = []
            response.map(note => {
                // changes keys to camelCase for to process as JS
                let noteToCamelcase = dataFormatter(note)
                // commenting out until there is logic to remove notes
                // noteToCamelcase.removedAt = new Date(noteToCamelcase.removedAt).toLocaleString("en-US")
                notes.push(noteToCamelcase)
                cache.set(noteToCamelcase.id, noteToCamelcase)
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
        // reverse order to return latest notes first

        return notes.reverse();
    }
    catch(err){
        return err;
    }
};

export default getNotes;
