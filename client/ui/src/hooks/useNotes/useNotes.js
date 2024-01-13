import { useState, useEffect, useRef } from "react";
import { useLazyQuery, useMutation } from '@apollo/react-hooks';

import { GET_NOTES_QUERY } from "@/graphql/fragments/getNotes";
import { ADD_NOTE_MUTATION } from "@/graphql/fragments/addNote";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const isMounted = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      getNotesQuery()
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  const [getNotesQuery, { loading: getNotesLoading}] = useLazyQuery(GET_NOTES_QUERY, {
    fetchPolicy: 'network-only',
    onCompleted: newData => {
      return setNotes(newData.getNotes);
    },
  });

  const [addNoteMutation, { loading: addNotesLoading}] = useMutation(ADD_NOTE_MUTATION, {
    onCompleted: newData => {
      return getNotesQuery();
    }
  });

  const addNote = async (newNote) => {
    await addNoteMutation({
      variables: {
        note: {
          note: newNote.note,
          subject: newNote.subject,
        },
      },
    })
  };

  return {
    loading: getNotesLoading || addNotesLoading || false,
    notes,
    getNotesQuery,
    addNote,
  };
};

export default useNotes;
