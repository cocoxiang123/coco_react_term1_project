import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Row from "../components/Row";
import { AwesomeButton } from "react-awesome-button";
import { NoteContext } from '../context';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';

function Home() {
    const context = useContext(NoteContext);
    const { notes, handDelete, onDragEnd } = context;
    return (
        <DragDropContext
            onDragEnd={onDragEnd}
        >
            <div className="home">
                <h1 className="dNotes m-3">Notes</h1>
                {notes.length === 0 ?
                    <p>There is no list</p> :
                    <div className="displayAll">
                        <Droppable droppableId='root' >
                            {provided => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}>
                                    {notes.map((item, index) => {
                                        return <Row note={item} key={index} id={index} handDelete={handDelete} />
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                }
                <AwesomeButton type="secondary">
                    <Link to="/addNote">Add Note</Link>
                </AwesomeButton>
            </div>
        </DragDropContext>
    );
}

export default Home;
