import React from "react";
import { Link } from "react-router-dom";
import { Draggable } from 'react-beautiful-dnd';

function Row({ note, id, handDelete }) {
    const { title, content } = note;
    const colors = ['#5cbbfc', '#6ce6dd', '#dfe245', '#ff9aa2'];
    const mystyle = {
        backgroundColor: id < colors.length ? `${colors[id]}` : `${colors[id % colors.length]}`,
    }
    const borderstyle = {
        border: `1px solid ${colors[id]}`,
    }
    const myFontColor = {
        color: id < colors.length ? `${colors[id]}` : `${colors[id % colors.length]}`,
    }
    const onDelete = (event) => {
        let result = window.confirm("Want to delete?");
        if (result) {
            let id = parseInt(event.target.name);
            handDelete(id);
        }
    }

    return (
        <>
            <Draggable draggableId={`${id}`} index={id} className="dContainer m-1">
                {(provided, snapshot) => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <div className="eachNote" style={borderstyle}>
                            <div className="displayRowTitle" style={mystyle}>
                                <h3>Title</h3>
                                <button name={id} onClick={onDelete} className="btn btn-light btn-sm"> Delete</button>
                            </div>
                            <Link to={{ pathname: `/editNote/${id}` }} style={myFontColor} className="titleBody">
                                {title}
                            </Link>
                            <div className="displayRowTitle" style={mystyle}>
                                <h3>Note</h3>
                            </div>
                            <Link to={{ pathname: `/editNote/${id}` }} style={myFontColor} className="titleBody">
                                {content}
                            </Link>
                        </div>
                    </div>
                )}
            </Draggable>
        </>
    );
}

export default Row;
