"use client"
import { useState } from "react";

const TaskForm = ({ addTask }) => {  /// Definición del Componente 
  ///  Estados del Componente
  const [title, setTitle] = useState(""); ///Almacena el texto del título de la tarea.
  const [description, setDescription] = useState(""); ///Almacena el texto de la descripción de la tarea.

  /// Manejo del Evento 
  const handleSubmit = (e) => {
    e.preventDefault(); /// Previene que el formulario recargue la página al enviarse.
    if (!title.trim() || !description.trim()) return; /// el trim elimina espacios en blanco .
    /// Llama a addTask con un objeto que representa una nueva tarea.
    addTask({ id: Date.now(), title, description, completed: false }); ///La tarea incluye un id único generado con Date.now()el título, la descripción y una propiedad completed
    setTitle("");
    setDescription("");
  };

  return (///Crea un formulario que ejecuta handleSubmit cuando se envía
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col"> 
      <div>
        <input
        type="text"
        placeholder="Título"
        value={title} /// El valor del campo está sincronizado con el estado title
        onChange={(e) => setTitle(e.target.value)} /// Actualiza el estado cuando el usuario escribe.
        className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      </div>
      <div>
        <input
        placeholder="Descripción"
        value={description} /// El valor del campo está sincronizado con el estado 
        onChange={(e) => setDescription(e.target.value)} /// Actualiza el estado cuando el usuario escribe.
        className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      </div>
      
      <button type="submit"
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Añadir Tarea
     </button>
    </form>
  );
};

export default TaskForm;

// El usuario ingresa el título y la descripción de la tarea.
// Al hacer clic en "Añadir Tarea", se llama a handleSubmit.
// Si ambos campos están llenos:
// Se agrega una nueva tarea con addTask.
// El formulario se limpia.
