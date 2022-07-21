import Task from './Task';

function Tasks({ tasks, onDelete }) {
  return (
    <>
      {tasks.map((task) => (
        <Task onDelete={onDelete} key={task.id} task={task} />
      ))}
    </>
  );
}

export default Tasks;