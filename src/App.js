import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/header/header";
import Routes from "./component/routes";
import Footer from './component/footer/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-awesome-button/dist/styles.css";
import { getItem, setItem } from "./services/storage";



function App() {
  const [notes, setNotes] = useState({ titles: [], contents: [] });

  useEffect(() => {
    const noteTitles = getItem("titles");
    const noteContents = getItem("contents");
    setNotes(prev => {
      return {
        ...prev,
        titles: noteTitles,
        contents: noteContents,
      };
    });
  }, []);

  const handlerDelete = (key) => {
    let copyNotes = notes;
    (copyNotes.titles).splice(key, 1);
    (copyNotes.contents).splice(key, 1);
    setItem("titles", copyNotes.titles);
    setItem("contents", copyNotes.contents);
    setNotes(prev => {
      return {
        ...prev,
        copyNotes
      };
    })
  }
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) { return; }
    if (
      destination.draggableId === source.droppableId &&
      destination.index === source.index) { return; }
    const CopyTitleValue = notes.titles[draggableId];
    const CopyContentValue = notes.contents[draggableId];
    const CopyTitles = Array.from(notes.titles);
    CopyTitles.splice(source.index, 1);
    CopyTitles.splice(destination.index, 0, CopyTitleValue);
    const CopyContent = Array.from(notes.contents);
    CopyContent.splice(source.index, 1);
    CopyContent.splice(destination.index, 0, CopyContentValue);
    setNotes(prev => {
      return {
        ...prev,
        titles: CopyTitles,
        contents: CopyContent,
      };
    });
  }

  return (
    <div className="App">
      <Header />
      <Routes notes={notes} handlerDelete={handlerDelete} onDragEnd={onDragEnd} />
      <Footer />
    </div>
  );
}

export default App;
