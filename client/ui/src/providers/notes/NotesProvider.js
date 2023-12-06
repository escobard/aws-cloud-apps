import React from "react";
import PropTypes from "prop-types";
import { useModal, useNotes } from "../../hooks";

export const NotesContext = React.createContext([{}, () => {}]);

const NotesProvider = ({ children }) => {
  const { showModal, openModal, closeModal, renderModal } = useModal();
  const { loading, notes, note, getNotesQuery, addNote } = useNotes();

  const updateNotes = async (subject, newNote) => {
    const request = {
      subject,
      note: newNote,
    };

    await addNote(request);

    setTimeout(() => {
      closeModal();
    }, 500);
  };

  return (
    <NotesContext.Provider
      value={{
        showModal,
        openModal,
        closeModal,
        renderModal,
        loading,
        notes,
        note,
        getNotesQuery,
        addNote,
        updateNotes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

NotesProvider.propTypes = { children: PropTypes.element.isRequired };

export default NotesProvider;
