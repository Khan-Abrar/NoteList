import React, { useContext } from "react";
import { NoteContext } from "../Context/Notes/NoteContextProvider";

export default function Alert() {
  const context = useContext(NoteContext);
  const { alert } = context;
  const capitalize = (word) => {
    const lowerCase = word.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  };
  return (
    alert && (
      <div className={`alert alert-${alert.type} pb-2 d-${alert.display}`} role="alert">
        <strong>{capitalize(alert.type)}: </strong>
        {alert.message}
      </div>
    )
  );
}
