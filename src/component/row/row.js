import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Draggable } from 'react-beautiful-dnd';

function Row(props) {
  const { index, title, content, handlerDelete } = props;
  const colors = ['#5cbbfc', '#6ce6dd', '#dfe245', '#ff9aa2'];
  const mystyle = {
    backgroundColor: index < colors.length ? `${colors[index]}` : `${colors[index % colors.length]}`,
  }
  const borderstyle = {
    border: `1px solid ${colors[index]}`,
  }
  const myFontColor = {
    color: index < colors.length ? `${colors[index]}` : `${colors[index % colors.length]}`,
  }

  const onDelete = (event) => {
    let result = window.confirm("Want to delete?");
    if (result) {
      let id = event.target.getAttribute("index");
      handlerDelete(id);
    }
  }


  return (
    <>
      <Draggable draggableId={`${index}`} index={index} className="dContainer m-1">
        {provided => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="eachNote" style={borderstyle}>
              <div className="DisplayRow" style={mystyle}>
                <h3 className="Dtitle pl-2 pt-2">Title</h3>
                <button className="btn btn-light m-1" index={index} onClick={onDelete}> Delete</button>
              </div>
              <Link to={{ pathname: `/editNote/${index}` }} style={myFontColor}>
                <div className="ml-2 titleBody">{title}</div>
              </Link>
              <h3 className="Dnote pl-2 py-2" style={mystyle}>Note</h3>
              <Link to={{ pathname: `/editNote/${index}` }} style={myFontColor}>
                <div className="contentBody pl-2 pb-2">{content}</div>
              </Link>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
}

export default Row;
