import { useState, useEffect, useRef } from "react";
import { useLazyQuery, useMutation } from '@apollo/react-hooks';

import { client } from "@/graphql";
import { GET_NOTES_QUERY } from "@/graphql/fragments/getNotes";
import { ADD_NOTE_MUTATION } from "@/graphql/fragments/addNote";

const useNotes = () => {
  const [notes, setNotes] = useState(undefined);
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
    // client must be defined in the query since no top level apollo client is available
    client: client,
    fetchPolicy: 'network-only',
    // causes really weird state issues to use cache first!! huge gotcha
    // nextFetchPolicy: 'cache-first',
    onCompleted: newData => {
      const receivedData = newData.getNotes
      setNotes(receivedData);
      return receivedData;
    },
  });

  const [addNoteMutation, {loading: addNotesLoading}] = useMutation(ADD_NOTE_MUTATION, {
    client: client,
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
