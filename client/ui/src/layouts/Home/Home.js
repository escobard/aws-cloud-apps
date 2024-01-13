import React, { useContext } from "react";

import { NotesContext } from "../../providers";

import { Notes } from "../../components";

import "../../styles/global.scss";

import Form from "../../components/Form";
import { addNoteFields, notes as noteCatalog } from "../../constants";

// TODO - move this entire file under app/page
const Home = () => {
  const { renderModal, notes, updateNotes, loading } = useContext(NotesContext);

  const renderNotes = (id, data) => {
    if (!data){
      return <Notes data={noteCatalog.loading} />;
    } else{
      const hasData = Array.isArray(data) && data.length > 0;
      const hasApiError = !Array.isArray(data) && data.length > 0;

      if (hasData) {
        return data.map((note, i) => {
          return <Notes key={note.subject + i} data={note} />;
        });
      }

      if (hasApiError) {
        noteCatalog.apiError.note = data;
        return <Notes data={noteCatalog.apiError} />;
      }

      return <Notes data={noteCatalog.noNotes} />;
    }

  };

  return (
    <>
      <main className="home">
        {renderModal({
          title: "Add note",
          content: <Form submit={updateNotes} fields={addNoteFields} />,
        })}
        {renderNotes("notes", notes)}
      </main>
    </>
  );
};

export default Home;
