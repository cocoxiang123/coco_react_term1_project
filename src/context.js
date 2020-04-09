import React, { useState, useEffect } from 'react'
import { getItem, setItem } from "./services/storage"
export const NoteContext = React.createContext();


function NoteProvider({ children }) {
    const [notes, setNotes] = useState([]);
    const [values, setValues] = useState({ title: "", content: "" })

    useEffect(() => {
        let tempNotes = getItem("notes");
        setNotes(tempNotes);
    }, [])
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
    const handDelete = id => {
        const tempNotes = [...notes];
        tempNotes.splice(id, 1);
        setNotes(tempNotes);
    }
    const onDragEnd = result => {
        const { destination, source, draggableId } = result;
        if (!destination) { return; }
        if (
            destination.draggableId === source.droppableId &&
            destination.index === source.index) { return; }
        const tempNote = notes[draggableId];
        notes.splice(source.index, 1);
        notes.splice(destination.index, 0, tempNote);
        setItem("notes", notes);
    }
    return (
        <NoteContext.Provider value={{ values, handleChange, notes, handDelete, onDragEnd }}>{children}</NoteContext.Provider>
    )
}

export default NoteProvider
