import React from 'react';

const TaskList = ({tasks, deleteTask, toggleComplete}) => {
  return (
    <div className="card ">
        <h5 className="card bg-dark text-white">Your Tasks</h5>
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