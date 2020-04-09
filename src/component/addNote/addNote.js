import React, { useState, useEffect } from "react";
import "./style.css";
import { setSessionItem, removeSessionItem, setItem, getItem, getSessionItem } from "../../services/storage";
import { useHistory } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";

function AddNote() {
  const history = useHistory();
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const titleItems = getItem("titles", []);
  const contentItems = getItem("contents", []);
  const titleItem = getSessionItem("title", []);
  const contentItem = getSessionItem("content", []);

  useEffect(() => {
    setSessionItem("title", title);
    setSessionItem("content", content);
  }, [title, content])

  const onChangeTitle = e => {
    setTitle(e.target.value);
  };
  const onChangeContent = e => {
    setContent(e.target.value);
  };

  function handleClick() {
    removeSessionItem("title");
    removeSessionItem("content");
    history.push("/");
    window.location.reload();
    setItem("titles", [...titleItems, titleItem])
    setItem("contents", [...contentItems, contentItem]);
  }

  return (
    <div className="Page">
      <div className="formContainer">
        <div className="pageName">Add Note</div>
        <form className="addForm">
          <label>Title :</label>
          <br />
          <input type="text" value={title} onChange={onChangeTitle} placeholder="Title..." />
          <br />
          <label>Content :</label>
          <textarea value={content} onChange={onChangeContent} placeholder="Note..." />
          <AwesomeButton onPress={handleClick} className="btn btn-primary m-3">
            Add Note
        </AwesomeButton>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
