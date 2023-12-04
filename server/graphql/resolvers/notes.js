import getNotes from "./helpers/getNotes.js"

const resolver = {
    Query: {
        getNotes(parent){
            return getNotes(parent);
        }
    }
};

export default resolver
