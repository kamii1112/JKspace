import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Notes from "./Components/Notes/Notes";
import NotesHtml from "./Components/Notes/NotesHtml";
import Project from "./Components/Project/Project";
import ImportantLinks from "./Components/ImportantLinks/ImportantLinks";
import Github from "./Components/Github";
import Creator from "./Components/Creator";
import { Toaster } from "react-hot-toast";

const App = () => {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/project" element={<Project />} />
        <Route path="/important-links" element={<ImportantLinks />} />
        <Route path="/github" element={<Github />} />
        <Route path="/creator" element={<Creator />} />

        <Route path="/notes/html" element={<NotesHtml />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 1000,
          style: {
            background: '#a7adfe',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 1000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </div>
  );
};

export default App;
