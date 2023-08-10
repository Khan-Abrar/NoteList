import React, { useContext } from "react";
import NoteListLightCard from "../NoteListLightCard.svg";
import NoteListDarkCard from "../NoteListDarkCard.svg";
import { ThemeContext } from "../Context/Theme/ThemeContextProvider";
import { Link } from "react-router-dom";

export default function About() {
  const context = useContext(ThemeContext);
  const { theme } = context;
  return (
    <div className="about-container container text-center">
      <div className="about-noteList container p-3">
        <h4>About NoteList</h4>
        <div className="container my-4">
          <Link to="https://github.com/Khan-Abrar/NoteList">
            <img src={`${theme === "light" ? NoteListLightCard : NoteListDarkCard}`} className="NoteListRepoCard" alt="NoteListRepoCard" />
          </Link>
        </div>
        <p className="pt-2">Fork the repository by clicking on the Card above.</p>
        <p>Install the apk &amp; use this app on any device you want.</p>
        <p>Use it to your heart's content!</p>
      </div>
    </div>
  );
}
