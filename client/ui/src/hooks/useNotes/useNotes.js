import { useState, useEffect, useRef } from "react";
import { useLazyQuery, useMutation } from '@apollo/react-hooks';

import { client } from "@/graphql";
import { GET_NOTES_QUERY } from "@/graphql/fragments/getNotes";
import { ADD_NOTE_MUTATION } from "@/graphql/fragments/addNote";

import { api } from "@/utils";

import { apiRoutes, headers } from "@/constants";

const useNotes = () => {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState(undefined);
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

  useEffect(() => {
    note && getNotesQuery();
  }, [note]);

  const [getNotesQuery, { loading: notesLoading }] = useLazyQuery(GET_NOTES_QUERY, {
    // client must be defined in the query since no top level apollo client is available
    client: client,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    // causes really weird state issues to use cache first!! huge gotcha
    // nextFetchPolicy: 'cache-first',
    onCompleted: newData => {
      const receivedData = newData.getNotes
      setNotes(receivedData);
      return receivedData
    },
  });

  const [addNoteMutation] = useMutation(ADD_NOTE_MUTATION, {
    client: client,
    onCompleted: newData => {
      setNote(newData.createNote);
      return newData.createNote;
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
    loading,
    notes,
    note,
    getNotesQuery,
    addNote,
  };
};

export default useNotes;
