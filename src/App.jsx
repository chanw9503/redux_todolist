import React from 'react';
import './App.css';
import AddForm from './components/addform/AddForm';
import ToDoCard from './components/card/TodoCard';
import NavToDo from './components/nav/NavToDo';

function App() {
  return (
    <div className="wrap">
      <NavToDo />
      <AddForm />
      <div>
        <h3>Working...🔥</h3>
        <ToDoCard />
        <h3>Done...🎉</h3>
        <ToDoCard />
      </div>
    </div>
  );
}

export default App;
