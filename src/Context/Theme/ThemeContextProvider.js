import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "light");
  const [toggle, setToggle] = useState(JSON.parse(localStorage.getItem("toggle") || false));

  //Method to set and update theme in localStorage
  const setLocalTheme = (theme, toggle) => {
    localStorage.setItem("theme", JSON.stringify(theme));
    localStorage.setItem("toggle", JSON.stringify(toggle));
  };

  //Run setLocalTheme method only if there's an update in theme
  useEffect(() => {
    document.querySelector("body").setAttribute("note-theme", theme);
    //To keep the toggle state intact after reload
    toggle ? document.querySelector("#toggleSwitch").setAttribute("checked", "") : document.querySelector("#toggleSwitch").removeAttribute("checked");
    setLocalTheme(theme, toggle);
  }, [theme, toggle]);

  const darkTheme = () => {
    document.querySelector("body").setAttribute("note-theme", theme);
    setToggle(true);
    setTheme("dark");
  };

  const lightTheme = () => {
    document.querySelector("body").setAttribute("note-theme", theme);
    setToggle(false);
    setTheme("light");
  };
  const toggleTheme = () => {
    toggle ? lightTheme() : darkTheme();
  };

  return <ThemeContext.Provider value={{ toggleTheme, theme }}>{props.children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeContextProvider };
