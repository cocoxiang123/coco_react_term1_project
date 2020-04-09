import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home'
import AddNote from './pages/AddNote'
import EditNote from './pages/EditNote'
import Header from './components/Header';
import "react-awesome-button/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addNote" exact component={AddNote} />
        <Route path="/editNote/:id" exact component={EditNote} />
        <Route>Page not found!</Route>
      </Switch >
    </>
  );
}

export default App;
