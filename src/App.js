import { Todos } from "./MyComponents/Todos"; // React Component
import { AddTodo } from "./MyComponents/AddTodo";   // React Component
import React, { useState, useEffect } from 'react';
import { Patients } from "./MyComponents/Patients"; // React Component
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; //React Router

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = []; //  No Todos
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos")); // Getting Todos entered by the user
  }


  const onDelete = (todo) => {
    console.log("I am ondelete of Notes", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (desc) => {
    console.log("I am adding these notes",desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  return ( 
    <> 
    <Router>
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <Patients/>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
        </Switch> 
      
    </Router>
    </>
  );
}

export default App;
