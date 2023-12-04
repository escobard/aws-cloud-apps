import cache from "../../cache.js";

const getNotes = async () => {
    try{
        const notes  = cache.keys()
        notes.map(id => {
            let note = cache.get(id)
            cache.set(note.id, note)
        });
        return notes;
    }
    catch(err){
        return err;
    }
};

export default getNotes;
