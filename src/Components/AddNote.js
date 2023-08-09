import React, { useContext, useState, useEffect } from "react";
import { NoteContext } from "../Context/Notes/NoteContextProvider";

export default function AddNote() {
  const context = useContext(NoteContext);
  const { addNote, generateId } = context;
  const [note, setNote] = useState({ title: "", description: "" });

  //To generate the uniqueId once in the start & add it to note State
  useEffect(() => {
    setNote({ ...note, uniqueId: generateId("id") });
    // eslint-disable-next-line
  }, []);

  const addNoteSubmit = (e) => {
    e.preventDefault();
    setNote({ ...note, uniqueId: generateId("id") });
    addNote(note);
  };

  const handleChange = (e) => {
    //Match target name id set initially with its value & add it to note
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <div className="container-fluid py-3 px-3" id="addNote-input">
          <h5 className="py-1 my-2">
            <strong>Add new Note</strong>
          </h5>
          <form onSubmit={addNoteSubmit}>
            <div className="form-group my-2">
              <input onChange={handleChange} type="text" className="addNote-field form-control p-1" name="title" id="addNote-name" placeholder="Note Title" required minLength="3" />
            </div>
            <div className="form-group my-2 pb-2">
              <textarea onChange={handleChange} className="addNote-field form-control p-1" id="addNote-desc" name="description" rows="2" placeholder="Note Description" required minLength="5"></textarea>
            </div>
            <button type="submit" id="submit" className="addNoteBtn btn mb-2">
              Add Note
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
