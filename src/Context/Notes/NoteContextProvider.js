import React, { useState, useEffect, createContext } from "react";

const NoteContext = createContext();

const NoteContextProvider = (props) => {
  //Initialize noteList from localStorage, set [] if not present
  const [noteList, setNoteList] = useState(JSON.parse(localStorage.getItem("noteList")) || []);
  const [valid, setValid] = useState(true);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type, display) => {
    setAlert({
      message: message,
      type: type,
      display:display,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //Method to set and update noteList in localStorage
  const setLocalNoteList = (noteList) => {
    localStorage.setItem("noteList", JSON.stringify(noteList));
  };

  //Run setLocalNoteList method only if there's an update in noteList
  useEffect(() => {
    setLocalNoteList(noteList);
  }, [noteList]);

  //Method to generate unique id
  const generateId = (prefix) => {
    return `${prefix}_${new Date().getTime()}`;
  };

  //Method to add new note by appending the noteList with the latest note.
  const addNote = (note) => {
    setNoteList(noteList.concat(note));
  };

  //Method to delete the notes by matching the uniqueId passed
  const deleteNote = (id) => {
    setNoteList(noteList.filter((note) => note.uniqueId !== id));
  };

  //Method to update the edited Note details in noteList
  const saveNote = (title, description, id) => {
    if (title.length < 3) {
      setValid(false);
    } else if (description.length < 5) {
      setValid(false);
    } else {
      //Creating a deepcopy as state is immutable i.e can't do noteList[i].title = title
      let updatedNoteList = JSON.parse(JSON.stringify(noteList));
      for (let i = 0; i < updatedNoteList.length; i++) {
        const currentNoteList = updatedNoteList[i];
        if (currentNoteList.uniqueId === id) {
          updatedNoteList[i].title = title;
          updatedNoteList[i].description = description;
          break;
        }
      }
      setNoteList(updatedNoteList);
      setValid(true);
      showAlert("Changes saved successfully", "success", "block");
    }
  };

  return (
    <NoteContext.Provider
      value={{
        valid,
        noteList,
        alert,
        setNoteList,
        addNote,
        generateId,
        deleteNote,
        saveNote,
        showAlert,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export { NoteContextProvider, NoteContext };
