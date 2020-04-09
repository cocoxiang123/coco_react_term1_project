import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/home";
import AddNote from "./addNote/addNote";
import EditNote from "./editNote/editNote";


function Routes(props) {

  const { notes, handlerDelete, onDragEnd } = props;

  return (

    <Switch>
      <Route path="/" exact>
        <Home notes={notes} handlerDelete={handlerDelete} onDragEnd={onDragEnd} />
      </Route>
      <Route path="/addNote" exact>
        <AddNote />
      </Route>
      <Route path="/editNote/:key" exact>
        <EditNote notes={notes} />
      </Route>
      <Route>Page not found!</Route>
    </Switch >
  );
}

export default Routes;
