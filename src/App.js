import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';


function App() {
  return (
  <>

      <div className='card-to-do'>
          <h1>Lista de tareas</h1>
          <div className='counter-todos'>
            <h3>Tareas totales: 0</h3>
            <h3>Tareas Pendientes: 0</h3>
          </div>
          <div className='add-todo'>
            <h3>Agregar Tarea</h3>
            <TodoAdd />
          </div>
      </div>

      <TodoList />
   
    </>
  );
}

export default App;
