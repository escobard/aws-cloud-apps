import cache from "../../cache.js";

const getNotes = async () => {
    try{
        const notes  = cache.keys()
        const fetchedNotes = []
        notes.map(id => {
            let note = cache.get(id)
            fetchedNotes.push(note)
            // cache.set(note.id, note)
        });
        return fetchedNotes;
    }
    catch(err){
        return err;
    }
};

export default getNotes;
