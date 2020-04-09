import React from "react";
import { Link } from "react-router-dom";
import Row from "../row/row";
import "./style.css";
import { AwesomeButton } from "react-awesome-button";
import { Droppable, DragDropContext } from 'react-beautiful-dnd';

function Home(props) {
  const { notes, onDragEnd, handlerDelete } = props;
  const titles = notes.titles;
  const contents = notes.contents;

  if (!titles || !titles.length) {
    return <div className="home m-5">
      <h3>There is no list.</h3>
      <div>
        <AwesomeButton className="m-3">
          <Link to="/addNote" className="text-light">Add Note</Link>
        </AwesomeButton>
      </div>
    </div>
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <div className="home">
        <h1 className="dNotes m-3">Notes</h1>
        <div className="displayAll">
          <Droppable droppableId='root' >
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}>
                {titles.map((item, index) =>
                  <Row key={index} index={index} title={item} content={contents[index]} handlerDelete={handlerDelete} />
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <AwesomeButton type="secondary" className="btn btn-primary m-3">
          <Link to="/addNote">Add Note</Link>
        </AwesomeButton>
      </div>
    </DragDropContext>
  );
}

export default Home;
