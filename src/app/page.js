"use client"
import { useState, useEffect } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default function App() {
  /// Estado Global
  const [tasks, setTasks] = useState([]); ///  Almacena todas las tareas como un arreglo.
  const [filter, setFilter] = useState("all"); /// Indica el filtro actual, "All" Muestra todas las tareas.

  // Cargar tareas desde localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || []; /// Obtiene las tareas almacenadas en localStorage,Si no hay tareas, asigna un arreglo vacío.
    setTasks(storedTasks);
  }, []); /// como dependencia asegura que este efecto solo se ejecute una vez.

  // Guardar tareas en localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); /// Cada vez que cambian las tareas (tasks), se actualizan en localStorage.
  }, [tasks]);

  ///Agrega una nueva tarea al principio del arreglo.
  const addTask = (task) => setTasks([task, ...tasks]);

  /// Actualiza una tarea específica basándose en su id.
  const updateTask = (updatedTask) =>
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
/// Elimina una tarea filtrando aquellas cuyo id no coincida con el proporcionado.
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Lista de Tareas</h1>
      {/* Renderiza el formulario para añadir nuevas tareas, pasando la función addTask */}
      <TaskForm addTask={addTask} /> 
      <div className="flex justify-center space-x-4 mb-6"> 
      {/* /// Botones para cambiar el filtro */}
        <button onClick={() => setFilter("all")} 
                className={`py-2 px-4 rounded-lg ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
          Todas
        </button>
        <button onClick={() => setFilter("completed")}
                className={`py-2 px-4 rounded-lg ${filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
          Completadas
        </button>
        <button onClick={() => setFilter("incomplete")}
                className={`py-2 px-4 rounded-lg ${filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
          Incompletas
        </button>
      </div>
      {/* ///Lista de Tareas */}
      <TaskList ///Renderiza las tareas utilizando el componente TaskList.
        tasks={tasks} ///Las tareas
        updateTask={updateTask} /// actualizar
        deleteTask={deleteTask} /// eliminar
        filter={filter} /// filtros
      /> 
    </div>
  );
}


// Las tareas se cargan desde localStorage al iniciar la aplicación.

// El usuario la crea desde el formulario (TaskForm).
// La tarea se guarda en el estado y en localStorage.

// El usuario selecciona un filtro (Todas, Completadas o Incompletas).
// Solo se muestran las tareas correspondientes.

// El usuario puede editar o eliminar una tarea desde la lista (TaskList).
// Las actualizaciones se reflejan en el estado y en localStorage.