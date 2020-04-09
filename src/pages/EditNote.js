import React, { useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import { setItem, getItem } from "../services/storage";
import { AwesomeButton } from "react-awesome-button";

function EditNote() {
    const params = useParams();
    const history = useHistory();
    let tempNotes = getItem("notes");
    const index = params.id;
    let note = tempNotes[index];
    const { title, content } = note;

    const [editNote, setEditNote] = useState({ title: title, content: content });

    const handleChange = e => {
        const { name, value } = e.target;
        setEditNote({ ...editNote, [name]: value })
    }
    const onUpdateNotes = () => {
        history.push("/");
        tempNotes[index] = editNote;
        console.log(tempNotes);
        setItem("notes", tempNotes);
        window.location.reload();
    }
    const onKeyUpdateNote = (e) => {
        if (e.keyCode === 13) {
            onUpdateNotes();
        }
    }
    return (
        <div className="Page" >
            <div className="formContainer">
                <div className="pageName">Edit Note</div>
                <form className="Form">
                    <label>Title :</label>
                    <input type="text" name="title" value={editNote.title} onChange={handleChange} />
                    <label>content :</label>
                    <textarea value={editNote.content} name="content" onChange={handleChange} onKeyDown={onKeyUpdateNote} />
                    <AwesomeButton type="secondary" onPress={onUpdateNotes} className="button">Save</AwesomeButton>
                </form>
            </div>
        </div >
    );
}

export default EditNote;
