import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Link1 from "./Components/Link1";
import Link2 from "./Components/Link2";
import Home from "./Components/Home";
import Notes from "./Components/Notes/Notes";
import NotesHtml from "./Components/Notes/NotesHtml";
import Project from "./Components/Project/Project";
import ImportantLinks from "./Components/ImportantLinks/ImportantLinks";
import Github from "./Components/Github";

const App = () => {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/important-links" element={<ImportantLinks/>}/>
        <Route path="/github" element={<Github/>}/>

        <Route path="/notes/html" element={<NotesHtml/>} />
      </Routes>
    </div>
  );
};

export default App;