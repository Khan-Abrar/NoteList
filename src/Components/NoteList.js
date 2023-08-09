import React, { useContext } from "react";
import { NoteContext } from "../Context/Notes/NoteContextProvider";

export default function NoteList(props) {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { noteItem, updateNote } = props;
  return (
    <div className="container noteListContainer p-2 mb-2">
      <div className="accordion" id={`accordionNote_${noteItem.uniqueId}`}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <div className="icons">
              <div>
                <i className="fa-solid fa-trash fa-2xs mx-2" onClick={() => deleteNote(noteItem.uniqueId)}></i>
                <i className="fa-solid fa-pen-to-square fa-2xs mx-2" onClick={() => updateNote(noteItem)} data-bs-toggle="modal" data-bs-target="#noteModal"></i>
              </div>
            </div>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse_${noteItem.uniqueId}`} aria-expanded="true" aria-controls={`collapse_${noteItem.uniqueId}`}>
              <strong>{noteItem.title}</strong>
            </button>
          </h2>
          <div id={`collapse_${noteItem.uniqueId}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent={`#accordionNote_${noteItem.uniqueId}`}>
            <div className="accordion-body">
              <p>{noteItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
