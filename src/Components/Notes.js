import React, { useContext, useState, useRef } from "react";
import { NoteContext } from "../Context/Notes/NoteContextProvider";
import NoteList from "./NoteList";
import AddNote from "./AddNote";

const Notes = () => {
  const refClose = useRef();
  const context = useContext(NoteContext);
  const { noteList, saveNote, valid } = context;
  const [note, setNote] = useState({ title1: "", description1: "", uniqueId: "" });

  const updateNote = (currentNote) => {
    setNote({ title1: currentNote.title, description1: currentNote.description, uniqueId: currentNote.uniqueId });
  };

  const updateNoteSubmit = (e) => {
    if (valid) {
      e.preventDefault();
      saveNote(note.title1, note.description1, note.uniqueId);
      refClose.current.click();
    } else {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container" id="main-container">
        <AddNote />
        <div className="modal fade" id="noteModal" tabIndex="-1" aria-labelledby="noteModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header pb-0">
                <h5 className="modal-title" id="noteModalLabel">
                  <strong>Edit Note</strong>
                </h5>
                <button type="button" className="x-close btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={updateNoteSubmit}>
                  <div className="form-group my-2">
                    <input type="text" className="form-control p-1" onChange={handleChange} value={note.title1} name="title1" id="updateNote-name" placeholder="Enter Title" required minLength="3" />
                  </div>
                  <div className="form-group my-2 pb-2">
                    <textarea className="form-control p-1" id="updateNote-desc" onChange={handleChange} value={note.description1} name="description1" rows="2" placeholder="Enter Description" required minLength="5"></textarea>
                  </div>
                  <button ref={refClose} type="button" className="closeModal btn btn-secondary me-2" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="saveUpdate btn btn-primary">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="noteList-container container my-4">
          <h5 className="yourNotes-title">
            <strong>Your Notes</strong>
          </h5>
        </div>
        {noteList.length === 0 ? (
          <div className="noteList-info container my-3">
            <p>Nothing to show, start by adding a new Note!</p>
          </div>
        ) : (
          noteList.map((noteItem, index) => {
            return <NoteList key={index} updateNote={updateNote} noteItem={noteItem} />;
          })
        )}
      </div>
    </>
  );
};

export default Notes;
