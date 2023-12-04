import cache from "../../cache.js";

const getNoteByID = async (parent, noteId) => {
    try{
        return cache.get(noteId);
    } catch(err){
        return err;
    }
};

export default getNoteByID;
