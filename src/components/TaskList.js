import React from 'react';

const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'danger';
      case 'Normal':
        return 'warning';
      case 'Low':
        return 'info';
      default:
        return 'secondary'; // You can choose a default color if needed
    }
  };

const TaskList = ({tasks, deleteTask, toggleComplete, changePriority}) => {
  return (
    <div className="card ">
        <h5 className="card bg-dark text-white">Your Tasks</h5>
        <div >Note: You can click on the priority button to change priority to High, Normal or Low!!!</div>
        <div className="card-body" style={{height:"70vh", overflow: "auto"}}>
            <ul className="list-group list-group-flush ">
                {tasks.map((task) => (
                    <li key={task.id} 
                    className= {task.completed 
                        ? "list-group-item list-group-item-success " 
                        : "list-group-item list-group-item-danger "}>
                        <div className="ms-2 me-auto d-flex justify-content-between align-items-start">
                            <div className="font-weight-bolder">{task.text}</div>
                            <div className="btn-group">
                                <button 
                                    type="button"
                                    className={task.completed?"btn btn-sm btn-danger":"btn btn-sm btn-success"}
                                    onClick={task.completed ? (() => deleteTask(task.id)) : (() => toggleComplete(task.id))}
                                >
                                    {task.completed? "Delete" : "Mark as Complete"}
                                </button>
                                {(task.completed) ? "" : <div className="dropdown" >
                                    <button type="button" 
                                    className={`btn btn-sm  btn-${getPriorityColor(task.priority)} `}
                                    onClick={()=> changePriority(task.id, task.priority)}
                                    >
                                        Priority: {task.priority}
                                    </button>
                                </div>}

                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default TaskList;