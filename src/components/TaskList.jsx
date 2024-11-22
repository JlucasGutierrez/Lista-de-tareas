import TaskItem from "./TaskItem";

const TaskList = ({ tasks, updateTask, deleteTask, filter }) => {
  ///  Filtrado de Tareas
    const filteredTasks = tasks.filter((task) => { /// Crea una nueva lista de tareas basada en el filtro
      if (filter === "completed") return task.completed; /// Devuelve solo tareas con completed: true.
      if (filter === "incomplete") return !task.completed; ///Devuelve solo tareas con completed: false.
      return true;
      ///El resultado se almacena en filteredTasks.
    });
  
    return (
      <div className="space-y-4">
        {filteredTasks.length > 0 ? ( ///Si hay tareas
          filteredTasks.map((task) => ( ///Itera sobre la lista filtrada de tareas y renderiza un componente TaskItem para cada tarea.
            <TaskItem
              key={task.id} ///Asigna una clave única basada en el id de la tarea.
              task={task} ///Los datos de la tarea actual.
              updateTask={updateTask} ///modificar tarea
              deleteTask={deleteTask} /// eliminar tarea
            />
          ))
        ) : (
          /// Renderiza un mensaje "No hay tareas."
          <p className="text-gray-500 text-center">No hay tareas.</p>
        )}
      </div>
    );
  };
  
  export default TaskList;


// Filtra las tareas según el valor de la prop filter.

// Si hay tareas filtradas, se genera una lista de componentes TaskItem.
// Si no hay tareas, muestra un mensaje indicando que no hay elementos disponibles.
