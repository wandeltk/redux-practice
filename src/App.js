import React from 'react';
import './App.css';
import {ToDoList} from './components/ToDoList'
import {AddItem} from './components/AddItem';
import {ErrorMessage} from './components/ErrorMessage'

function App() {
  return (
    <>
      <ToDoList />
      <AddItem />
      <ErrorMessage />
    </>
  );
}

export default App;
