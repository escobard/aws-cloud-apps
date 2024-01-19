import cache from "../cache.js";
import { dataFormatter } from "./dataFormatter.js";
import  { knexConnector } from "./knexConnector.js";

export const cacheHydrate = async (table, operation, knex) => {
  let notes = []
  let response = await knex(table).select(operation);
  // populate cache with DB data after initial fetch
  response.map(note => {
    // changes keys to camelCase for to process as JS
    let noteToCamelcase = dataFormatter(note)

    cache.set(noteToCamelcase.id, noteToCamelcase)
    notes.push(noteToCamelcase)
  })
  return notes;
}