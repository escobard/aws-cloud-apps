import React, { useContext } from "react";

import { NotesContext } from "../../providers";

import { Notes } from "../../components";

import "../../styles/global.scss";

import Form from "./Form";
import { addNoteFields, notes as noteCatalog } from "../../constants";

const Home = () => {
  const { renderModal, notes, updateNotes } = useContext(NotesContext);
  console.log(notes)
  const renderNotes = (id, data) => {
    const hasData = Array.isArray(data) && data.length > 0;
    const hasNoData = !Array.isArray(data) && data.length > 0;

    if (hasData) {
      return data.map((note, i) => {
        return <Notes key={note.subject + i} data={note} />;
      });
    }

    if (hasNoData) {
      noteCatalog.apiError.note = data;
      return <Notes data={noteCatalog.apiError} />;
    }

    return <Notes data={noteCatalog.noNotes} />;
  };

  return (
    <>
      <main className="home">
        {renderModal({
          title: "Add note",
          content: <Form submit={updateNotes} fields={addNoteFields} />,
        })}
        {notes && renderNotes("notes", notes)}
      </main>
    </>
  );
};

export default Home;
