import cache from "../../cache.js"

const createNote = async (parent, newNote) => {
    try{
        const date = new Date().toLocaleDateString("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
            timeZone: "Canada/Mountain",
        });
        const notes  = cache.keys();
        let id;
        if (notes.length === 0 ) {
            id = 1
        }
        else {
            id = notes.length + 1;
        }
        const note = { id: id.toString(), user_id: 1, subject: newNote.subject, note: newNote.note, date }
        cache.set(id.toString(), note);
        return note;
    }
    catch(err){
        return err;
    }
};

export default createNote;
