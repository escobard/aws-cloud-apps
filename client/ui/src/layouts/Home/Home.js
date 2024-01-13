import React, { useContext } from "react";

import { NotesContext } from "../../providers";

import { Notes } from "../../components";

import "../../styles/global.scss";

import Form from "../../components/Form";
import { addNoteFields, notes as noteCatalog } from "../../constants";

const Home = () => {
  const { renderModal, notes, updateNotes, loading } = useContext(NotesContext);

  const renderNotes = (id, data) => {
    if (!data){
      return <Notes data={noteCatalog.loading} />;
    } else{
      const hasData = Array.isArray(data) && data.length > 0 && data[0].id;
      const hasApiError = !Array.isArray(data) && data.length > 0;

      if (hasData) {
        return data.map((note) => {
          return <Notes key={note.id} data={note} />;
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
