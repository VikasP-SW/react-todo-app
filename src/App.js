import './App.css';
import Header from './MyComponents/Header.js';
import Todos from './MyComponents/Todos.js';
import Footer from './MyComponents/Footer.js';
import AddTodo from './MyComponents/AddTodo.js';
import About from './MyComponents/About.js';

import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // DELETE TODO
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  // ADD TODO
  const addTodo = (title, desc) => {

    let sno;

    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    };

    setTodos([...todos, myTodo]);
  };

  return (
    <Router>

  <Header title="My Todo List" searchBar={false} />

  <Routes>

    <Route
      path="/"
      element={
        <>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
        </>
      }
    />

    <Route
      path="/about"
      element={<About />}
    />

  </Routes>

  <Footer />

</Router>
  );
}

export default App;