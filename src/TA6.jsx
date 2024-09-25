import React, { useState } from 'react';
import './TA6.css'; 

function ListaDeTareas() {
  const [tarea, setTarea] = useState(''); 
  const [tareas, setTareas] = useState([]); 

  const manejarCambio = (e) => {
    setTarea(e.target.value); 
  };

  const agregarTarea = (e) => {
    e.preventDefault(); 
    if (tarea.trim() !== '') {
      setTareas([...tareas, tarea]); 
      setTarea(''); 
    }
  };

  return (
    <div>
      <form onSubmit={agregarTarea}>
        <input
          type="text"
          value={tarea}
          onChange={manejarCambio}
          placeholder="Escribe una tarea"
        />
        <button type="submit">Agregar Tarea</button>
      </form>
      <ul>
        {tareas.map((t, index) => (
          <li key={index}>{t}</li> 
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTareas;
