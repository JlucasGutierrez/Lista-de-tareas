/// El componente recibe tres props
const TaskItem = ({ task, updateTask, deleteTask }) => {
    
  /// Alternar el Estado de Completado
  /// Cambia el estado de la tarea entre completada y no completada
      const handleToggleComplete = () => {
      updateTask({ ...task, completed: !task.completed }); /// Utiliza updateTask para enviar una versión actualizada de la tarea al sistema.
    };
  ///Editar Tarea
    const handleEdit = () => {
      /// Muestra dos cuadros de diálogo (prompt) para editar el título y la descripción.
      const newTitle = prompt("Editar título", task.title);
      const newDescription = prompt("Editar descripción", task.description);
      ///Si ambos campos tienen valores (newTitle y newDescription), actualiza la tarea con la función updateTask.
      if (newTitle && newDescription) {
        updateTask({ ...task, title: newTitle, description: newDescription });
      }
    };
  
    return (
      <div
        className={`p-4 border rounded-lg flex flex-col md:flex-row md:justify-between items-start md:items-center ${
          task.completed ? "bg-gray-100" : "bg-white"
        }`}
      >
        <div>
          <h3
            className={`text-lg font-bold ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </h3>
          <p className="text-sm text-gray-600">{task.description}</p>
        </div>
        <div className="flex justify-center">
            <div className="inline-flex items-center overflow-hidden rounded-lg border border-stroke dark:border-dark-3">
          <button
          /// Llama a handleToggleComplete y cambia el texto según el estado de la tarea.
            onClick={handleToggleComplete}
            className="border-r border-stroke px-4 py-3 text-base font-medium text-dark last-of-type:border-r-0 hover:bg-gray-2 hover:text-primary dark:border-dark-3 dark:text-white">
            {task.completed ? "Desmarcar" : "Completar"}
          </button>
          <button
          /// Llama a handleEdit para modificar la tarea.
            onClick={handleEdit}
            className="border-r border-stroke px-4 py-3 text-base font-medium text-dark last-of-type:border-r-0 hover:bg-gray-2 hover:text-primary dark:border-dark-3 dark:text-white"
          >
            Editar
          </button>
          <button
          /// Ejecuta deleteTask pasando el id de la tarea.
            onClick={() => deleteTask(task.id)}
            className="border-r border-stroke px-4 py-3 text-base font-medium text-dark last-of-type:border-r-0 hover:bg-gray-2 hover:text-primary dark:border-dark-3 dark:text-white"
          >
            Eliminar
          </button>
         </div>
        </div>
        
      </div>
    );
  };
  
  export default TaskItem;


// Muestra el título y la descripción de la tarea.
// Ajusta el diseño y estilo según si la tarea está completada.

// Completar/Desmarcar: Alterna el estado de la tarea con handleToggleComplete.
// Editar: Permite al usuario modificar el título y la descripción.
// Eliminar: Llama a deleteTask para remover la tarea de la lista.
  