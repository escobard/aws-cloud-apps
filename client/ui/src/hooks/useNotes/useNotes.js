import { useState, useEffect, useRef } from "react";
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';

import { client } from "@/graphql";
import { GET_NOTES_QUERY } from "@/graphql/fragments/getNotes";

import { api } from "@/utils";

import { apiRoutes, headers } from "@/constants";

const useNotes = () => {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState(undefined);
  const [notes, setNotes] = useState(undefined);
  const isMounted = useRef(null);

  const getNotes = async () => {
    isMounted.current && setLoading(true);
    const results = await api("get", apiRoutes.getNotes, { headers });
    if (isMounted.current && results) {
      setNotes(results);
      setLoading(false);
      return results;
    }
    return results;
  };

  const [getNotesQuery, { loading: notesLoading }] = useLazyQuery(GET_NOTES_QUERY, {
    client: client,
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
    // leverages cache on second request for the same data, avoids unnecessary network requests
    nextFetchPolicy: 'cache-first',
    onCompleted: newData => {
      const receivedData = newData.getNotes
      console.log(receivedData)
    },
  });

  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      getNotes();
      getNotesQuery()
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  useEffect(() => {
    note && getNotes();
  }, [note]);

  const addNote = async (newNote) => {
    isMounted.current && setLoading(true);
    const results = await api("post", apiRoutes.addNote, { headers }, newNote);
    if (isMounted.current && results) {
      setNote(results);
      setLoading(false);
      return results;
    }
    return results;
  };

  return {
    loading,
    notes,
    note,
    getNotes,
    addNote,
  };
};

export default useNotes;
