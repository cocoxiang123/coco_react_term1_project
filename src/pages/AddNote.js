import React, { useContext, useEffect } from "react";
import { setSessionItem, removeSessionItem, setItem } from '../services/storage';
import { useHistory } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import { NoteContext } from '../context';

function AddNote() {
    const { values, handleChange, notes } = useContext(NoteContext);
    const { title, content } = values;
    const history = useHistory();
    let CopyNotes = [...notes];

    useEffect(() => {
        setSessionItem("note", values);
    }, [values])

    const handleClick = () => {
        CopyNotes.push(values);
        setItem("notes", CopyNotes);
        removeSessionItem("note");
        history.push('/');
        window.location.reload(false);
    }
    return (
        <div className="Page">
            <div className="formContainer">
                <div className="pageName">Add Note</div>
                <form className="Form">
                    <label>Title :</label>
                    <input type="text" name="title" value={title} onChange={handleChange} placeholder="Title..." />
                    <label>Content :</label>
                    <textarea value={content} name="content" onChange={handleChange} placeholder="Note..." />
                    <AwesomeButton onPress={handleClick} type="secondary" className="button">
                        Add Note
                     </AwesomeButton>
                </form>
            </div>
        </div>
    )
}

export default AddNote
