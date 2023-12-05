import React, { useContext } from "react";

import { NotesContext } from "../../providers";

// TODO - fix constant absolute import to allow more readable imports
import { footer } from "../../constants/catalog";

import "./Footer.scss";

const Footer = () => {
  const { openModal, notes } = useContext(NotesContext);

  const hasNotes = notes && Array.isArray(notes) && notes.length >= 1;

  return (
    <footer>
      {hasNotes ? (
        <>
          <p>
            {footer.withNotes} <span> {notes.length} </span>
          </p>
        </>
      ) : (
        <p>{footer.noNotes}</p>
      )}
      {notes && Array.isArray(notes) && (
        <i
          aria-label="Add note"
          role="button"
          className="plus big icon"
          onClick={openModal}
          tabIndex={0}
          onKeyDown={(e) => {
            e.key === "Enter" && openModal();
          }}
        />
      )}
    </footer>
  );
};

export default Footer;
