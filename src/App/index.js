import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false},
//   { text: 'Cortar el pasto', completed: false},
//   { text: 'Revisar mail', completed: true},
//   { text: 'Revisar correo', completed: false},
//   { text: 'pasear perro', completed: true},
// ];



function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  );
}

export default App;
