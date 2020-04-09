import React, { useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import { setItem, getItem } from "../../services/storage";
import { AwesomeButton } from "react-awesome-button";

function EditNote(props) {
  const { notes } = props;

  const params = useParams();
  const history = useHistory();

  const copyNotes = notes;
  const index = params.key;
  let titleCopy = getItem("titles")[index];
  let contentCopy = getItem("contents")[index];

  const [editTitle, seteditTitle] = useState(titleCopy);
  const [editContent, seteditContent] = useState(contentCopy);

  const onChangeEditTitle = e => {
    seteditTitle(e.target.value);
  }
  const onChangeEditContent = e => {
    seteditContent(e.target.value);
  }
  const onUpdateNotes = () => {
    history.push("/");
    copyNotes.titles[index] = editTitle;
    setItem("titles", copyNotes.titles);
    copyNotes.contents[index] = editContent;
    setItem("contents", copyNotes.contents);
  }
  const onKeyUpdateNote = (e) => {
    if (e.keyCode === 13) {
      onUpdateNotes();
    }
  }
  if (!notes) {
    return "no list";
  }
  return (
    <div className="Page" >
      <div className="formContainer">
        <div className="pageName">Edit Note</div>
        <form className="addForm">
          <label>Title</label>
          <br />
          <input type="text" value={editTitle} onChange={onChangeEditTitle} />
          <br />
          <label>content</label>
          <textarea value={editContent} onChange={onChangeEditContent} onKeyDown={onKeyUpdateNote} />
          <AwesomeButton type="secondary" className="btn btn-primary m-3" onPress={onUpdateNotes} >
            Save
    </AwesomeButton>
        </form>
      </div>


    </div >
  );
}

export default EditNote;
